const Intern = require('../lib/Intern');


test('checks to see intern has required information', () => {
    const intern = new Intern('Stacey', '#236', 'stacey@employee.com', 'intern', 'UofU');
    console.log(intern);
});