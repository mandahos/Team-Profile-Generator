const Employee = require("./lib/Employee");
class Engineer extends Employee{
    constructor(name, id, email, github) {
        member(name, id, email)
        this.github = github;
    }

    getRole(){
        return "Engineer";
    }

    getGitHub(){
        console.log(
            "Git Username: " +
            this.github
        );
    }

};

module.exports = Engineer;