const Manager = require('../lib/Manager.js');


test('creates a manager object', () => {
  const manager = new Manager('John', 1, 'some@email.com', 1);

  expect(manager.name).toBe('John');
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets manager's rol", () => {
  const manager = new Manager('John', 1, 'some@email.com', 1);
  expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});


