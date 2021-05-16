
const Employee = require('../lib/Employee');

test('checks to see employee has required information', () => {
    const employee = new Employee('Jim', '#256', 'jim@employee.com', 'employee');
    console.log(employee);
});

test('checks to see employee info entered', () =>{
    const employee = new Employee('Jane');

    expect(typeof(employee)).toBe("object");
    // expect(employee.id).toBe(expect.any(Number));
    // expect(employee.id).toBe(expect.any(String));
    // expect(employee.id).toBe(expect.any(String));
});

test('checks the value of employee ID', () => {
    const id = 256;
    const employee = new Employee("Ed", id);
    expect(employee.id).toBe(id);
});

// test('checks to see employee was entered', () =>{
//     const employee = new Employee('Jim', '#256', 'jim@employee.com', 'employee');

//     // expect(typeof(employee)).toBe("object");
//     expect(employee.name).toBe(expect(name));
//     expect(employee.id).toBe(expect(id));
//     expect(employee.email).toBe(expect(email));
// });

test('checks the value of employee ID', () => {
    const id = 256;
    const employee = new Employee('Jim', id);
    
    expect(employee.id).toBe(id);
});

test('checks to see employee email', () => {
    const email = 'jim@employee.com';
    const employee = new Employee('Jim', email);

    expect(employee.email).toBe(String);
});

test('checks to see employees role', () => {
    const role = employee
    const employee = new Employee('Jim', role);
   
       expect(employee.role).toBe(role);
});