const Employee = require('../lib/Employee');


test('creates a employee object', () => {
    const employee = new Employee('Rose');
    expect(employee.name).toBe('Rose');
 });

  


