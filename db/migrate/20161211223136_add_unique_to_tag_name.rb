class AddUniqueToTagName < ActiveRecord::Migration
  def change
    change_column :tags, :tag_name, :string, unique: true
  end
end
