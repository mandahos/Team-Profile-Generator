// const Employee = require("./lib/Employee");

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
       return "Employee"
    }
}  
;

// function Employee(name = '') {
//     this.name = name;
//     this.id = document.getElementById('id');
//     this.email = document.getElementById('email');
//     this.role = document.getElementById('role');
// }

module.exports = Employee;