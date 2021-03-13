
const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, and email if provided valid arguments", () => {
            const walter = new Engineer("Walter",15,"wmccone@gmail.com","wmccone");
            //these should test the constructor values
            expect(walter.name).toEqual("Walter")
            expect(walter.id).toEqual(15)
            expect(walter.email).toEqual("wmccone@gmail.com")
            expect(walter.github).toEqual("wmccone")
        });
    });
    //This should test the get github functionality
    describe("getGitHub", () => {
        it("should return the Github written on the class", () => {
            const winston = new Engineer("Winston",4,"winston@gmail.com","winstonthedog")
            //this should return a github user name
            expect(winston.getGitHub()).toEqual("winstonthedog")
        });
    });
    //this is going to test the get role functionality
    describe("getRole", () => {
        it("should return the Engineer type written on the class", () => {
            const winston = new Engineer("Winston",4,"winston@gmail.com","winstonthedog")
            //this should return engineer
            expect(winston.getRole()).toEqual("Engineer")
        });
    });
})