# Quicknote

[Quicknote live][heroku]

[heroku]: http://www.qcknotes.heroku.com
Quicknote is a full-stack web application inspired by Evernote.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

## Features & Implementation

  Quicknote has 4 major features in the realm of note-taking:

  1. User account creation and authentication
  2. Be able to write notes with rich text editing, as well as update/delete them.
  3. Allow the user to organize those notes in various notebooks.
  4. Allow the user to tag notes in order to organize related notes that aren't necessarily included in the same notebook.



### User authentication

  User authentication is provided. Passwords are properly hashed. Unique session tokens are ensured in order to make sure that no one has access to anyone's notes but their own.

  ![image of user auth](/docs/production_images/splash_page.png)

  The design of the app components follows the redux architectural framework.  One store holds the state, which holds each slice of changing data.

  There are three major components on the home page container: Sidebar, NoteIndex, NoteDetail.

### Note Rendering and Editing

  Notes are rendered in the NoteIndex component in a compact state (title, first line of body, and a delete button).  The notes can also be accessed in the note detail component.  Here they are available to be edited, tagged, and deleted.

  Rich text editing was provided by the Quill.js library. This allows the user to make lists, choose between several different fonts, color notes, highlight certain sentences, etc.

![image of note index](/docs/production_images/note_detail_view.png)

Note editing is implemented using the Quill.js library, allowing for a Word-processor-like user experience.

### Notebooks

Users are able to organize their notes inside notebooks.  Notebooks can be created, updated, and deleted.  Every user starts off with a default notebook that they can populate with notes.  

![image of notebook drawer](/docs/production_images/notebook-view-1.png)

### Tags

Tags allow additional customization for Quicknote. Users are able to organize various different related notes by tagging them.  They can then view those notes by filtering by tag.  Tags can be added to any notes and deleted as well.

![image of tag drawer](/docs/production_images/tag-view.png)

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for Quicknote are outlined below.

### Search

Searching notes is a standard feature of Evernote.  I will allow the user to search by content (both title or body) and populate the search index with those specific notes.

### Note Sharing

I also want to develop the ability for users to share their notes with other users of Quicknote.  This feature would be a great way for users to collaborate on their notes, and potentially edit each others notes, if given permission.
