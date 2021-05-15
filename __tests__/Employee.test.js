
const Employee = require('../lib/Employee');

// jest.mock('../lib/Employee');

// console.log(new Employee());

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

test('checks to see employee has required information', () => {
 const employee = new Employee('Jim', '#256', 'jim@employee.com', 'employee');
 console.log(employee);

//  expect(employee.role).toEqual(
//      expect.arrayContaining([expect.any(Object)])
//  );

});