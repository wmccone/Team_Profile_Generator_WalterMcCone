const { it, expect } = require("@jest/globals");
const { describe } = require("yargs");
const Employee = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, and email if provided valid arguments", () => {
            const walter = new Engineer("Walter",15,"wmccone@gmail.com","wmccone");

            expect(walter.name).toEqual("Walter")
            expect(walter.id).toEqual(15)
            expect(walter.email).toEqual("wmccone@gmail.com")
            expect(walter.gitHub).toEqual("wmccone")
        });
    });

    describe("getGitHub", () => {
        it("should return the Github written on the class", () => {
            const winston = new Employee("Winston",4,"winston@gmail.com","winstonthedog")

            expect(winston.getGitHub()).toReturn("winstonthedog")
        });
    });
    describe("getRecord", () => {
        it("should return the employee type written on the class", () => {
            const winston = new Employee("Winston",4,"winston@gmail.com","winstonthedog")

            expect(winston.getRecord()).toReturn("Engineer")
        });
    });
})