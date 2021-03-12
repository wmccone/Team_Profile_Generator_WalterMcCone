
const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, and email if provided valid arguments", () => {
            const walter = new Intern("Walter",15,"wmccone@gmail.com","Texas State");

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
    describe("getRecord", () => {
        it("should return the Intern type written on the class", () => {
            const winston = new Intern("Winston",4,"winston@gmail.com","Puppy Academy")

            expect(winston.getRole()).toEqual("Intern")
        });
    });
})