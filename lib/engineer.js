const Employee = require('./employee')
//This will construct the Engineer class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
    //this will return the github to the template
    getGitHub () {
        return this.github
    }
    //This is going to return a Role to the template and the switch statement in the index file
    getRole() {
        return 'Engineer'
    }
}
module.exports = Engineer;


