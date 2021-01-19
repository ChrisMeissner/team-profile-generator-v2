const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
  const engineer = new Engineer('name', 'id', 'email', 'github');
  
  expect(engineer.getName()).toBe('name');
  expect(engineer.getId()).toBe('id');
  expect(engineer.getEmail()).toBe('email');
  expect(engineer.getGithub()).toBe('github');
  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(String));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});