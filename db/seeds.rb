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

personal_notebook_id = guest.notebooks.first.id
todos_notebook = Notebook.create!(title: "Todos", author_id: guest.id)
favorites_notebook = Notebook.create!(title: "Favoritess", author_id: guest.id)
coding_notebook = Notebook.create!(title: "Coding", author_id: guest.id)



project_todos = Note.create!(title: "Project Todos", body: "<p><u style=\"font-size: 32px;\">12/16</u></p><ul><li><s style=\"font-size: 18px;\">Fix tags issue</s></li><li><s style=\"font-size: 18px;\">Fix bugs that popped up from fixing tags</s></li><li><s style=\"font-size: 18px;\">Add autosave feature</s></li><li><s style=\"font-size: 18px;\">More bugs :(</s></li><li><s style=\"font-size: 18px;\">Add seeds</s></li><li><s style=\"font-size: 18px;\">Deploy to heroku</s></li><li><span style=\"font-size: 18px;\">Present</span></li><li><span style=\"font-size: 18px;\">Sleep</span></li></ul>", author_id: guest.id, notebook_id: todos_notebook.id)
grocery_todos = Note.create!(title: "Groceries", body: "<ol><li><u>Condiments</u></li><li class=\"ql-indent-1\">Mayo</li><li class=\"ql-indent-1\">Ketchup</li><li class=\"ql-indent-1\">BBQ Sauce</li><li class=\"ql-indent-1\">Salt</li><li class=\"ql-indent-1\">Pepper</li><li><u>Cereal</u></li><li class=\"ql-indent-1\">Cheerios</li><li class=\"ql-indent-1\">Cinnamon Toast Crunch</li><li><u>Baking</u></li><li class=\"ql-indent-1\">Sugar</li><li class=\"ql-indent-1\">Baking Powder</li><li><u>Meat</u></li><li class=\"ql-indent-1\">Chicken Breast</li></ol>", author_id: guest.id, notebook_id: todos_notebook.id)
misc_todos = Note.create!(title: "Miscellaneous", body: "<p><strong style=\"color: rgb(230, 0, 0); font-size: 32px;\">Fix the bathroom sink!</strong></p>", author_id: guest.id, notebook_id: todos_notebook.id)

quotes_favorites = Note.create!(title: "Quotes", body: "<p><strong style=\"font-size: 32px;\">\"</strong><em style=\"font-size: 18px;\">Quality is not an act, it is a habit.</em><strong style=\"font-size: 32px;\">\"</strong> - Aristotle</p><p><strong style=\"font-size: 32px;\">\"</strong><span style=\"font-size: 18px;\">You cannot have a positive life and a negative mind</span><strong style=\"font-size: 32px;\">\"</strong> - Joyce Meyer</p><p><strong style=\"font-size: 32px;\">\"</strong><span style=\"font-size: 18px;\">Yesterday is not ours to recover, but tomorrow is ours to win or lose.</span><strong style=\"font-size: 32px;\">\"</strong> - Lyndon B. Johnson</p><p><strong style=\"font-size: 32px;\">\"</strong><span style=\"font-size: 18px;\">Keep on keepin' on.</span><strong style=\"font-size: 32px;\">\"</strong> - Wise Man</p>", author_id: guest.id, notebook_id: favorites_notebook.id)
songs_favorites = Note.create!(title: "Songs", body: "<p><strong style=\"font-size: 18px;\">Imagine</strong><span style=\"font-size: 18px;\"> - John Lennon</span></p><p><strong style=\"font-size: 18px;\">Rocket Man</strong><span style=\"font-size: 18px;\"> - Elton John</span></p><p><strong style=\"font-size: 18px;\">Free Bird</strong><span style=\"font-size: 18px;\"> - Lynyrd Skynrd</span></p><p><strong style=\"font-size: 18px;\">Hey Jude</strong><span style=\"font-size: 18px;\"> - Beatles</span></p><p><strong style=\"font-size: 18px;\">Bohemian Rhapsody</strong><span style=\"font-size: 18px;\"> - Queen</span></p><p><strong style=\"font-size: 18px;\">Stairway To Heaven</strong><span style=\"font-size: 18px;\"> - Led Zeppelin</span></p><p><strong style=\"font-size: 18px;\">Baby</strong><span style=\"font-size: 18px;\"> - Justin Bieber </span></p>", author_id: guest.id, notebook_id: favorites_notebook.id)
delis_favorites = Note.create!(title: "Delis", body: "<p><strong style=\"font-size: 32px; background-color: rgb(255, 255, 255); color: rgb(230, 0, 0);\">1 - DUKES</strong></p>", author_id: guest.id, notebook_id: favorites_notebook.id)

todos_tag = Tag.create!(tag_name: "todos")
project_todos_tagging = Tagging.create!(note_id: project_todos.id, tag_id: todos_tag.id)
grocery_todos_tagging = Tagging.create!(note_id: grocery_todos.id, tag_id: todos_tag.id)
misc_todos_tagging = Tagging.create!(note_id: misc_todos.id, tag_id: todos_tag.id)

music_tag = Tag.create!(tag_name: "music")
songs_music_tagging = Tagging.create!(note_id: songs_favorites.id, tag_id: music_tag.id)

food_tag = Tag.create!(tag_name: "food")
delis_food_tagging = Tagging.create!(note_id: delis_favorites.id, tag_id: food_tag.id)

shopping_tag = Tag.create!(tag_name: "shopping")
grocery_shopping_tagging = Tagging.create!(note_id: grocery_todos.id, tag_id: shopping_tag.id)

# note1 = Note.create!(title: "Groceries", body: "Need to buy milk and eggs.", author_id: guest.id, notebook_id: guest.notebooks.first.id)
# note2 = Note.create!(title: "Favorite song", body: "Scar Tissue by RHCP", author_id: guest.id, notebook_id: guest.notebooks.first.id)
# note3 = Note.create!(title: "TODO", body: "Win the lottery", author_id: guest.id, notebook_id: guest.notebooks.first.id)
# tag1 = Tag.create!(tag_name: "todos")
# tagging1 = Tagging.create!(note_id: note3.id, tag_id: tag1.id)
#
# second_notebook = Notebook.create!(title: "My Second Notebook", description: "Something", author_id: guest.id)
# note3 = Note.create!(title: "Random Note", body: "Some stuff", author_id: guest.id, notebook_id: second_notebook.id)
# note4 = Note.create!(title: "Another note", body: "More stuff", author_id: guest.id, notebook_id: second_notebook.id)
