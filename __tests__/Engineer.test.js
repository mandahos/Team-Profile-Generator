const Engineer = require ('../lib/Engineer');

test('checks to see engineer has required information', () => {
    const engineer = new Engineer('Phil', '#785', 'phil@employee.com', 'engineer', 'phil@github');
    console.log(engineer);
});