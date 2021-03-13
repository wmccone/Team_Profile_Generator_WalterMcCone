const Employee = require('./employee')
//This will construct the Manager class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    //This will return the office number to the manager template
    getofficeNumber () {
        return this.officeNumber
    }
    //This is going to return a Role to the template and the switch statement in the index file
    getRole() {
        return 'Manager'
    }
}
module.exports = Manager;