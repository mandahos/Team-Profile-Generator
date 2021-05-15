class Intern {
    constructor(name, id, email, role, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.school = school;
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

    getSchool(){
        console.log(
            "School: " +
            this.school   
        );
    }
};

module.exports = Intern