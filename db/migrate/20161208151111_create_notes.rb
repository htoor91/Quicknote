class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :author_id, index: true
      t.integer :notebook_id, index: true

      t.timestamps null: false
    end
  end
end
