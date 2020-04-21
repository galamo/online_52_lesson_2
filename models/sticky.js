function Sticky(id, desc) {
  this.id = id || `sticky_${Math.round(Math.random() * 9999)}`;
  this.desc = desc;
  this.createdAt = new Date();
}

function Board(stickyNotes = []) {
  this.stickyNotes = stickyNotes || generateStickyNotes();
}

function generateStickyNotes() {
  const stickyNotes = [];
  for (let index = 0; index < 100; index++) {
    stickyNotes.push(new Sticky(null, `description_${index}`));
  }
  return stickyNotes;
}

function gitTest() {
  console.log("can you see it?");
}
