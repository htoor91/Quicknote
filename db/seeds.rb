# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Note.destroy_all

guest = User.create!(username: "guest", password: "password")

note1 = Note.create!(title: "Groceries", body: "Need to buy milk and eggs.", author_id: guest.id)
note2 = Note.create!(title: "Favorite song", body: "Scar Tissue by RHCP", author_id: guest.id)
note3 = Note.create!(title: "TODO", body: "Win the lottery", author_id: guest.id)
