
const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, and email if provided valid arguments", () => {
            const walter = new Employee("Walter",15,"wmccone@gmail.com");

            expect(walter.name).toEqual("Walter")
            expect(walter.id).toEqual(15)
            expect(walter.email).toEqual("wmccone@gmail.com")
        });
    });
    describe("getName", () => {
        it("should return the name written on the class", () => {
            const winston = new Employee("Winston",4,"winston@gmail.com")

            expect(winston.getName()).toEqual("Winston")
        });
    });
    describe("getId", () => {
        it("should return the Id written on the class", () => {
            const winston = new Employee("Winston",4,"winston@gmail.com")

            expect(winston.getId()).toEqual(4)
        });
    });
    describe("getEmail", () => {
        it("should return the Email written on the class", () => {
            const winston = new Employee("Winston",4,"winston@gmail.com")

            expect(winston.getEmail()).toEqual("winston@gmail.com")
        });
    });
    describe("getRecord", () => {
        it("should return the employee type written on the class", () => {
            const winston = new Employee("Winston",4,"winston@gmail.com")

            expect(winston.getRole()).toEqual("Employee")
        });
    });
})