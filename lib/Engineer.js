class Engineer {
    constructor(name, id, email, role, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.github = github;
    }

    getName() {
        console.log(
            'Name: ' +
             this.name
        );
    }

    getId() {
        console.log(
            'ID: ' +
            this.id
        );
    }

    getEmail() {
        console.log(
        'Email: ' +
        this.email
        );
    }

    getRole(){
        console.log(
            "Role: " +
            this.role   
        );
    }

    getGitHub(){
        console.log(
            "Git Username: " +
            this.github
        );
    }

};

module.exports = Engineer