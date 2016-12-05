```js
{
  currentUser: {
    id: 1,
    username: "Guest"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createNote: {errors: ["body can't be blank"]},
    createNotebook: {errors: ["title can't be blank"]}
  },
  notes: {
    1: {
      title: "First Note!",
      body: "Just testing!",
      author_id: 1,
      notebook_id: 1
      tags: {
        1: {
          id: 1
          name: "general"
        }
      }
    }
  },
  notebooks: {
    1: {
      title: "Test Notebook",
      author_id: 1,
      description: "notebook for test notes"
    }
  }
  tagFilters: []
}
```
