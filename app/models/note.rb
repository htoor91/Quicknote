# == Schema Information
#
# Table name: notes
#
#  id          :integer          not null, primary key
#  title       :string
#  body        :text
#  author_id   :integer
#  notebook_id :integer
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

  validates :user, :notebook_id, presence: true


end
