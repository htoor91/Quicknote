# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  tag_name   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ActiveRecord::Base
  validates :tag_name, presence: true, uniqueness: true
  has_many :taggings, dependent: :destroy
  has_many :notes, through: :taggings, source: :note
end
