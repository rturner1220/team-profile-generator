const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Rose');
 });

 test('creates an id', () => {
    const testValue = 1000;
    const emp = new Employee('Rmt', testValue);
    expect(emp.id).toBe(testValue);
 });

 test('creates an email', () => {
    const testValue = 'employee@email.com';
    const emp = new Employee('Rmt', 1, testValue);
    expect(emp.email).toBe(testValue);
 });

 //getRole() value is employee
 test('getRole() return Employee', () => {
   const testValue = 'Employee';
   const emp = new Employee('Rose', 1, 'employee@email.com');
   expect(emp.getRole()).toBe(testValue);
 });