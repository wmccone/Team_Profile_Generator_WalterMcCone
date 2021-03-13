
const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, and email if provided valid arguments", () => {
            const walter = new Intern("Walter",15,"wmccone@gmail.com","Texas State");
            //these should test the constructor values
            expect(walter.name).toEqual("Walter")
            expect(walter.id).toEqual(15)
            expect(walter.email).toEqual("wmccone@gmail.com")
            expect(walter.school).toEqual("Texas State")
        });
    });
    
    describe("getSchool", () => {
        it("should return the School written on the class", () => {
            const winston = new Intern("Winston",4,"winston@gmail.com","Puppy Academy")

            expect(winston.getSchool()).toEqual("Puppy Academy")
        });
    });
    //this is going to test the get role functionality
    describe("getRole", () => {
        it("should return the Intern type written on the class", () => {
            const winston = new Intern("Winston",4,"winston@gmail.com","Puppy Academy")
            //this should return Intern
            expect(winston.getRole()).toEqual("Intern")
        });
    });
})