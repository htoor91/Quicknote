# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Notebook.destroy_all
Note.destroy_all
Tag.destroy_all
Tagging.destroy_all

guest = User.create!(username: "guest", password: "password")

note1 = Note.create!(title: "Groceries", body: "Need to buy milk and eggs.", author_id: guest.id, notebook_id: guest.notebooks.first.id)
note2 = Note.create!(title: "Favorite song", body: "Scar Tissue by RHCP", author_id: guest.id, notebook_id: guest.notebooks.first.id)
note3 = Note.create!(title: "TODO", body: "Win the lottery", author_id: guest.id, notebook_id: guest.notebooks.first.id)
tag1 = Tag.create!(tag_name: "todos")
tagging1 = Tagging.create!(note_id: note3.id, tag_id: tag1.id)

second_notebook = Notebook.create!(title: "My Second Notebook", description: "Something", author_id: guest.id)
note3 = Note.create!(title: "Random Note", body: "Some stuff", author_id: guest.id, notebook_id: second_notebook.id)
note4 = Note.create!(title: "Another note", body: "More stuff", author_id: guest.id, notebook_id: second_notebook.id)
