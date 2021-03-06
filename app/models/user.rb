# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token
  after_create :ensure_default_notebook
  before_validation :ensure_session_token_uniqueness

  has_many(
    :notes,
    class_name: :Note,
    primary_key: :id,
    foreign_key: :author_id
  )

  has_many(
    :notebooks,
    class_name: :Notebook,
    primary_key: :id,
    foreign_key: :author_id
  )

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    ensure_session_token_uniqueness
    self.save!
    self.session_token
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = User.generate_session_token
		end
	end

  def ensure_default_notebook
    Notebook.create!( title: "Personal Notebook", description: "This is your default notebook. Populate it with your notes!", author_id: self.id)
  end
end
