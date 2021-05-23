const inquirer = require("inquirer");
const fs = require("fs");
// pull the team info based on .js files for each category?

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHTML = require('./dist/generateHTML');
//pull in Team through command line
const teamArray = [];

//var inquirer = require('inquirer');

const addManager = () => {

    //var inquirer = require('inquirer');??

    return inquirer.prompt([{
        type: 'text',
        message: "Enter Managers's name",
        name: "name"
    },
    {
        message: "Enter the team member's id number",
        name: "id"
    },
    {
        message: "Enter the team member's email address",
        name: "email"
    },
    {
        message: "Enter the team member's office number",
        name: "officenumber"
    }
    ])

        .then(managerInput => {
            const { name, id, email, officenumber } = managerInput;
            const manager = new Manager(name, id, email, officenumber);
            teamArray.push(manager);
            console.log(manager);

        },

        );

}

const addEmployee = () => {

    //var inquirer = require('inquirer');??

    return inquirer.prompt([

        {
            type: "list",
            name: "role",
            message: "Which type of employee would you like to add?",
            choices: [
                "Engineer",
                "Intern"
            ]
        },
        {
            type: 'text',
            message: "Enter team member's name",
            name: "name"
        },

        {
            message: "Enter the team member's id number",
            name: "id"
        },
        {
            message: "Enter the team member's email address",
            name: "email"
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",   
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Any more team members?',
            default: false
        }
    ])

        .then(employeeInput => { 
            let {name, id, email, role, github, school, confirmAddEmployee} = employeeInput
            let employee;
            if (role === 'Engineer') {
                employee = new Engineer (name, id, email, github);
            } else if (role === "Intern") {
                employee = new Intern (name, id, email, school);
            }
            teamArray.push(employee);
            if (confirmAddEmployee) {
                return addEmployee(teamArray);
            } else {
                return teamArray;
            }
        });
}

const writeFile = data => {

    fs.writeFileSync('./team.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Check your Team's Page!")
        }
    })
};



addManager()
.then(addEmployee)
.then(teamArray => {
    return generateHTML(teamArray);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err);
});