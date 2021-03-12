
const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, and email if provided valid arguments", () => {
            const walter = new Manager("Walter",15,"wmccone@gmail.com",5125790164);

            expect(walter.name).toEqual("Walter")
            expect(walter.id).toEqual(15)
            expect(walter.email).toEqual("wmccone@gmail.com")
            expect(walter.officeNumber).toEqual(5125790164)
        });
    });
    describe("getEmail", () => {
        it("should return the Email written on the class", () => {
            const winston = new Manager("Winston",4,"winston@gmail.com",5125545554)

            expect(winston.getofficeNumber()).toEqual("5125545554")
        });
    });
    describe("getRecord", () => {
        it("should return the Manager type written on the class", () => {
            const winston = new Manager("Winston",4,"winston@gmail.com",5125545554)

            expect(winston.getRole()).toEqual("Manager")
        });
    });
})