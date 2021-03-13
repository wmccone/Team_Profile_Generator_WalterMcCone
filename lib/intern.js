const Employee = require('./employee')
//This will construct the Intern class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }
    //This will returnt the school to the intern template
    getSchool () {
        return this.school
    }
    //This is going to return a Role to the template and the switch statement in the index file
    getRole() {
        return 'Intern'
    }
}
module.exports = Intern;