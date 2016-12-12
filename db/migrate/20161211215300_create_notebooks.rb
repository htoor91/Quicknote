class CreateNotebooks < ActiveRecord::Migration
  def change
    create_table :notebooks do |t|
      t.string :title, null: false
      t.string :description
      t.integer :author_id, null: false, index: true
      t.timestamps null: false
    end
  end
end
