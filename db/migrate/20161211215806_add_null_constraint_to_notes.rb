class AddNullConstraintToNotes < ActiveRecord::Migration
  def change
    change_column :notes, :author_id, :integer, null: false
  end
end
