const Manager = require('../lib/Manager');

test("gets manager's information", () => {
  const manager = new Manager(name, id, email, officeNumber);

  expect(manager.getName()).toBe('name');
  expect(manager.getId()).toBe('id');
  expect(manager.getEmail()).toBe('email');
  expect(manager.getOfficeNumber()).toBe('officeNumber');
  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(String));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
});