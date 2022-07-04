const Employee = require('../lib/Employee')
const Inter = require('../lib/Inter');

test('creates an inter object', () => {
    const inter = new Inter('Alex');
 });

test('creates a school object', () => {
    const testValue = 'UNC';
    const emp = new Inter('Rmt', 1, 'inter@email.com', testValue);
    expect(emp.school).toBe(testValue);
});

test('get getschool name with getSchool() method', () => {
    const testValue = 'UNC';
    const emp = new Inter('Rmt', 1, 'inter@email.com', testValue);
    expect(emp.getSchool()).toBe(testValue);
 });
 
  // getRole() value is interm
  test('getRole() return Inter', () => {
    const testValue = 'Inter';
    const emp = new Inter('Rmt', 1, 'inter@email.com', 'UNC');
    expect(emp.getRole()).toBe(testValue);
 })