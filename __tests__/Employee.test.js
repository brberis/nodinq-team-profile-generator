const Empleyee = require('../lib/Employee.js');

// test employee object creation
test('creates an employee object', () => {
  const employee = new Empleyee('John', 1, 'some@email.com');

  expect(employee.name).toBe('John');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// test get name method
test("gets employee's name", () => {
  const employee = new Empleyee('John', 1, 'some@email.com');
  expect(employee.getName()).toEqual(expect.stringContaining('John'));
});

// test get id method
test("gets employee's id", () => {
  const employee = new Empleyee('John', 1, 'some@email.com');
  expect(employee.getId()).toEqual(expect.any(Number));
});

// test get email method
test("gets employee's email", () => {
  const employee = new Empleyee('John', 1, 'some@email.com');
  expect(employee.getEmail()).toEqual(expect.stringContaining('some@email.com'));
});

// test get role method
test("gets employee's role", () => {
  const employee = new Empleyee('John', 1, 'some@email.com');
  expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});


