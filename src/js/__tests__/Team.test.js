import Team from '../Team';

test.each([
  [['TestMember1']],
  [['Member2']],
  [['3', '2', '1']],
])('testing Team constructor on add function', (members) => {
  const testTeam = new Team();
  members.forEach((member) => {
    testTeam.add(member);
  });
  expect(testTeam.toArray()).toEqual(members);
});

test.each([
  [['3', '2', '5']],
  [['test', 's', '77']],
])('testing Team constructor on addAll function', (members) => {
  const testTeam = new Team();
  testTeam.addAll(members);
  expect(testTeam.toArray()).toEqual([members]);
});
