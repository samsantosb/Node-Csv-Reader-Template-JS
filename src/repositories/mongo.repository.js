const { ObjectId } = require("mongodb");

class MongoRepository {
    constructor(db) {
        this.db = db;
    }

    async getAll(collection) {
        return this.db.collection(collection).find().toArray();
    }

    async getOne(collection, id) {
        return this.db.collection(collection).findOne({ _id: new ObjectId(id) });
    }

    async create(collection, data) {
        return this.db.collection(collection).insertOne(data).toArray();
    }
}

module.exports = { MongoRepository };