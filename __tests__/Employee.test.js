
const Employee = require('../lib/Employee');

test('checks to see employee has required information', () => {
    const employee = new Employee('Jim', '#256', 'jim@employee.com', 'employee');
    console.log(employee);
});

test('checks to see employee info entered', () =>{
    const employee = new Employee('Jane', '479', 'jane@employee.com', 'employee');

    expect(typeof(employee)).toBe("object");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.name).toEqual(expect.any(String));
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

