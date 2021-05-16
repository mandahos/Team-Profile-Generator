//systems
const inquirer = require("inquirer");
const path = require("path");
// pull the team info based on .js files for each category?

const Engineer = require ('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHtml = require('./dist/generateTeam')
//pull in Team through command line
 const managerArray = []
 const internArray = []
 const engineerArray = []
//var inquirer = require('inquirer');

function addManager() {
    
    //var inquirer = require('inquirer');??

      inquirer.prompt([{
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
        message: "Enter the team member's office number",
        name: "officenumber"
    }
   ])

    .then(function({name, id, email, officenumber}) {
        var manager = new Manager(name, id, email, officenumber)
        managerArray.push(manager)
        console.log(managerArray)
        buildTeam()
    },
    
   );
   
}

function addIntern() {
    
    //var inquirer = require('inquirer');??

      inquirer.prompt([{
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
        message: "Enter the team member's school",
        name: "school"
    }
   ])

    .then(function({name, id, email, school}) {
        var intern = new Intern(name, id, email, school)
        internArray.push(intern)
        console.log(internArray)
      buildTeam()
    },
    
   );
   
}

function addEngineer() {
    
    //var inquirer = require('inquirer');??

      inquirer.prompt([{
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
        message: "Enter the team member's github",
        name: "github"
    }
   ])

    .then(function({name, id, email, github}) {
        var engineer = new Engineer(name, id, email, github)
        engineerArray.push(engineer)
        console.log(engineerArray)
      buildTeam()
    },
    
   );
   
}

function buildTeam() {
    inquirer.prompt ([
        {
          type: "list",
          name: "choice",
          message: "Which type of employee would you like to add?",
          choices: [
            "Engineer",
            "Intern",
            "Team Finished"
          ]  
        }
    ]) .then (({choice}) => {
        if(choice === "Engineer") {
            addEngineer()
        } else if(choice === "Intern") {
            addIntern()
        } else {
            //call finishteam function
        }
    })
    
}
const output = 
function finishTeam() {
    
}


addManager()




