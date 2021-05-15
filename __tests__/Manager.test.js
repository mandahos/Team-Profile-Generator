const Manager = require('../lib/Manager');

test('checks to see manager has required information', () => {
    const manager = new Manager('Stacey', '#236', 'stacey@employee.com', 'manager', '9876543210');
    console.log(manager);
});