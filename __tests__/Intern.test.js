const Intern = require('../lib/Intern.js');

// test intern object creation
test('creates an intern object', () => {
  const intern = new Intern('John', 1, 'some@email.com', 'UM');

  expect(intern.name).toBe('John');
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});

// test get school method
test("gets intern's school", () => {
  const intern = new Intern('John', 1, 'some@email.com', 'UM');
  expect(intern.getSchool()).toEqual(expect.stringContaining('UM'));
});

// test get role method
test("gets intern's role", () => {
  const intern = new Intern('John', 1, 'some@email.com', 'UM');
  expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});


