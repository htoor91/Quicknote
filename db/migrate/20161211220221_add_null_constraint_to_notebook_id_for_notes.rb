class AddNullConstraintToNotebookIdForNotes < ActiveRecord::Migration
  def change
    change_column :notes, :notebook_id, :integer, null: false
  end
end
