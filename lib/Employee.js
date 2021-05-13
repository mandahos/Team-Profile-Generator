class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
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
};

module.exports = Employee