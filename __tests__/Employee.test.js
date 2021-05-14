
const Employee = require('../lib/Employee');

test('checks to see employee has required information', () => {
 const employee = new Employee('Jim', '#256', 'jim@employee.com', 'employee');
 console.log(employee)
});