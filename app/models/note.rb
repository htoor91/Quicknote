# == Schema Information
#
# Table name: notes
#
#  id          :integer          not null, primary key
#  title       :string
#  body        :text
#  author_id   :integer          not null
#  notebook_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Note < ActiveRecord::Base
  belongs_to(
    :author,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id
  )
  belongs_to :notebook
  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings, source: :tag

  validates :author, :notebook, presence: true


end
