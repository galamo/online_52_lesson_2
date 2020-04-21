function Sticky(id, desc) {
  this.id = id || `sticky_${Math.round(Math.random() * 9999)}`;
  this.desc = desc;
  this.createdAt = new Date();
}
