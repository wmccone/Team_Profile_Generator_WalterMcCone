
const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, and email if provided valid arguments", () => {
            const walter = new Employee("Walter",15,"wmccone@gmail.com");
            //these should test the constructor values
            expect(walter.name).toEqual("Walter")
            expect(walter.id).toEqual(15)
            expect(walter.email).toEqual("wmccone@gmail.com")
        });
    });
    //this is going to test the get name functionality
    describe("getName", () => {
        it("should return the name written on the class", () => {
            const winston = new Employee("Winston",4,"winston@gmail.com")
            //should return the name
            expect(winston.getName()).toEqual("Winston")
        });
    });

    //this is going to test the get id functionality
    describe("getId", () => {
        it("should return the Id written on the class", () => {
            const winston = new Employee("Winston",4,"winston@gmail.com")
            //should return the id
            expect(winston.getId()).toEqual(4)
        });
    });
    //this is going to test the get email functionality
    describe("getEmail", () => {
        it("should return the Email written on the class", () => {
            const winston = new Employee("Winston",4,"winston@gmail.com")
            //should return the email
            expect(winston.getEmail()).toEqual("winston@gmail.com")
        });
    });

    //this is going to test the get role functionality
    describe("getRole", () => {
        it("should return the employee type written on the class", () => {
            const winston = new Employee("Winston",4,"winston@gmail.com")
            // this should return Employee
            expect(winston.getRole()).toEqual("Employee")
        });
    });
})