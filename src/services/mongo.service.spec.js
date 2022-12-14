const { fakePerson } = require("../__mocks__/fake.persons");
const { fakeMongoRepository } = require("../__mocks__/fake.mongo.repository");
const { MainService } = require("./main.service");

const mainService = new MainService(fakeMongoRepository);

describe("MainService", () => {
    describe("getAll", () => {
        it("should return all persons", async () => {
            const result = await mainService.getAll("csv");
            expect(result).toEqual(fakePerson);
        });
    });
    describe("getOne", () => {
        it("should return a person", async () => {
            const result = await mainService.getOne("csv", "1");
            expect(result).toEqual(fakePerson[0]);
        });
    });
    describe("create", () => {
        it("should return a person", async () => {
            const result = await mainService.create("csv", fakePerson[0]);
            expect(result).toEqual(fakePerson[0]);
        });
    });
});



