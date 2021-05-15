//systems
const inquirer = require("inquirer");
const fs = require("fs");

// pull the team info based on .js files for each category?
const Employee = require('../lib/Employee'); 
const Engineer = require ('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const { start } = require("repl");

//pull in Team through command line


function startTeam() {
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
   .then(({name}) => {
       this.member = new Member(name);
   });
   console.log(this.currentMember, this.member);
   
}

addMember.prototype.initializeaddMember = function() {
    this.members.push(new Member('',''));
    this.currentMember = this.members[0];
};   




module.exports = startTeam;

