//This will construct the Employee class
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email; 
    }
//This is going to return a name to the template
    getName(){
        return this.name
    }
    //This is going to return a ID to the template
    getId(){
        return this.id
    }
    //This is going to return a Email to the template
    getEmail(){
        return this.email
    }
    //This is going to return a Role to the template and the switch statement in the index file
    getRole(){
        return 'Employee'
    }
}
module.exports = Employee;