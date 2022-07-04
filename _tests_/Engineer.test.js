const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Jack');
 });

test('creates a github', () => {
    const testValue = 'GitHubName';
    const emp = new Engineer('Rmt', 1, 'engineer@email.com', testValue);
    expect(emp.github).toBe(testValue);
});

test('get github username with getGithub() method', () => {
   const testValue = 'GitHubName';
   const emp = new Engineer('Rmt', 1, 'engineer@email.com', testValue);
   expect(emp.getGithub()).toBe(testValue);
});

 // getRole() value is engineer
 test('getRole() return Engineer', () => {
    const testValue = 'Engineer';
    const emp = new Engineer('Rmt', 1, 'engineer@email.com', 'GitHubName');
    expect(emp.getRole()).toBe(testValue);
 })