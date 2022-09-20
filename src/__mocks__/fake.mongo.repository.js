const { fakePerson } = require("./fake.persons");

const fakeMongoRepository = {
    create: () => Promise.resolve(fakePerson[0]),
    delete: () => Promise.resolve(fakePerson[0]),
    getAll: () => Promise.resolve(fakePerson),
    getOne: () => Promise.resolve(fakePerson[0]),
    update: () => Promise.resolve(fakePerson[0]),
};

module.exports = { fakeMongoRepository };