const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
  const employee = new Employee('name', 'id', 'email');
  
  expect(employee.getName()).toBe('name');
  expect(employee.getId()).toBe('id');
  expect(employee.getEmail()).toBe('email');
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
});