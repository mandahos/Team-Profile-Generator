//systems
const inquirer = require("inquirer");
const fs = require("fs");

// pull the team info based on .js files for each category?
const Employee = require('../lib/Employee'); 
const Engineer = require ('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const { addTeamMember } = require("repl");

//pull in Team through command line



function addTeamMember() {
    this.name = name;
    this.role = role;
    this.email = email;
    this.github = github;
    this.phonenumber = phonenumber;
    this.school = school;

      inquirer.prompt([{
        type: 'text',
        message= "Enter team member's name",
        name: "name"
    },
    {
        type: "list",
        message: "Select the team member's role",
        choices: [
            "Employee",
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
        message: "Enter the team member's id number",
        name: "id"
    },
    {
        message: "Enter the team member's email address",
        name: "email"
    }
   ])
   .then(function({name, role, id, email}) {
       let roleInfo = "";
       if (role === "Employee") { 
           roleInfo = "name";
       } else if (role === "Engineer") {
           roleInfo = "GitHub";
       } else if (role === "Intern") {
        roleInfo = "School";  
       } else  {
         roleInfo = "Office Phone#";
       }
       
   });
  this.addNewEmployee();
   
}

addTeamMember.prototype.initializeaddTeamMember = function() {
    this.employee.push(new Employee('Jane', 'employee'));
    this.employee.push(new Employee('Phil', 'manager'));
    this.employee.push(new Employee('Grace', 'intern'));
    this.employee.push(new Employee('Hannah', 'engineer'));
    this.currentEmployee = this.employee[0];
};  

addTeamMember.prototype.addNewMember = function() {

};




module.exports = addTeamMember;

