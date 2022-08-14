const Engineer = require('../lib/Engineer.js');


test('creates an engineer object', () => {
  const engineer = new Engineer('John', 1, 'some@email.com', 'github account');

  expect(engineer.name).toBe('John');
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer's github", () => {
  const engineer = new Engineer('John', 1, 'some@email.com', 'github account');
  expect(engineer.getGithub()).toEqual(expect.stringContaining('github account'));
});

test("gets engineer's rol", () => {
  const engineer = new Engineer('John', 1, 'some@email.com', 'github account');
  expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});


