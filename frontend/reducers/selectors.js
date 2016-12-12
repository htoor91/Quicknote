export const allNotes = (notes) => Object.keys(notes).map((id) => {
  return notes[id];
});

export const allNotebooks = (notebooks) => Object.keys(notebooks).map((id) => {
  return notebooks[id];
});

export const allTags = (tags) => Object.keys(tags).map((id) => {
  return tags[id];
});
