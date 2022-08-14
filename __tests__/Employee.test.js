const Empleyee = require('../lib/Employee.js');


test('creates an employee', () => {
  const employee = new Empleyee('John', '1', 'some@email.com');

  expect(employee.name).toBe('John');
  expect(employee.id).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
});
