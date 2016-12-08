class RemoveNullConstraintsOnNotes < ActiveRecord::Migration
  def change
    change_column :notes, :title, :string, null: true
    change_column :notes, :body, :text, null: true
  end
end
