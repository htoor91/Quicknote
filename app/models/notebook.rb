# == Schema Information
#
# Table name: notebooks
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :string
#  author_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Notebook < ActiveRecord::Base

  validates :title, :author_id, presence: true

  belongs_to(
    :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id
  )

  has_many :notes, dependent: :destroy





end
