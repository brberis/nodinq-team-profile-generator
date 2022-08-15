const Empleyee = require('../lib/Employee.js');


test('creates an employee object', () => {
  const employee = new Empleyee('John', 1, 'some@email.com');

  expect(employee.name).toBe('John');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("gets employee's name", () => {
  const employee = new Empleyee('John', 1, 'some@email.com');
  expect(employee.getName()).toEqual(expect.stringContaining('John'));
});

test("gets employee's id", () => {
  const employee = new Empleyee('John', 1, 'some@email.com');
  expect(employee.getId()).toEqual(expect.any(Number));
});

test("gets employee's email", () => {
  const employee = new Empleyee('John', 1, 'some@email.com');
  expect(employee.getEmail()).toEqual(expect.stringContaining('some@email.com'));
});

test("gets employee's rol", () => {
  const employee = new Empleyee('John', 1, 'some@email.com');
  expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});


