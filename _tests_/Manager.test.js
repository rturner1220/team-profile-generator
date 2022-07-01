const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Ann');
 });

test('creates a office number', () => {
    const testValue = 1000;
    const emp = new Manager('Rmt', 1, 'manager@email.com', testValue);
    expect(emp.officeNumber).toBe(testValue);
});

test('get office number with getOfficeNumber() method', () => {
    const testValue = 1000;
    const emp = new Manager('Rmt', 1, 'manager@email.com', testValue);
    expect(emp.getOfficeNumber()).toBe(testValue);
 });
 