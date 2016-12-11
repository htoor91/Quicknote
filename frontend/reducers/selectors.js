export const allNotes = (notes) => Object.keys(notes).map((id) => {

  return notes[id];
});
