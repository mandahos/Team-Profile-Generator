const Employee = require("./lib/Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        addTeamMember(name, id, email, school)
        this.school = school;
    }

    
    getRole(){
       return "Intern";
    }

    getSchool(){
        console.log(
            "School: " +
            this.school   
        );
    }
};

module.exports = Intern;