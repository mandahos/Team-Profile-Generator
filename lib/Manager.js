class Manager {
    constructor(name, id, email, role, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.officeNumber = officeNumber;
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

    getOfficeNumber(){
        console.log(
            "Number: " +
            this.officeNumber   
        );
    }
};

module.exports = Manager