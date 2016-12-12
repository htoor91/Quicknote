# == Schema Information
#
# Table name: taggings
#
#  id         :integer          not null, primary key
#  note_id    :integer          not null
#  tag_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tagging < ActiveRecord::Base
  validates :note_id, :tag_id, presence: true
  validates :note_id, uniqueness: {scope: :tag_id}
  belongs_to :note
  belongs_to :tag
end
