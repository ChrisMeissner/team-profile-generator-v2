const Intern = require('../lib/Intern');

test('creates an intern object', () => {
  const intern = new Intern('name', 'id', 'email', 'schoolName');
  
  expect(intern.getName()).toBe('name');
  expect(intern.getId()).toBe('id');
  expect(intern.getEmail()).toBe('email');
  expect(intern.getSchoolName()).toBe('schoolName');
  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(String));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.schoolName).toEqual(expect.any(String));
});