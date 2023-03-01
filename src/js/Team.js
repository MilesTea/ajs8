class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    this.members.add(member);
  }

  addAll(...members) {
    members.forEach((member) => this.members.add(member));
  }

  toArray() {
    return Array.from(this.members);
  }
}

export default Team;
