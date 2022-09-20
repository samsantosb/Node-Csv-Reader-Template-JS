class MongoRepository {
    constructor(db) {
        this.db = db;
    }

    async getAll(collection) {
        return this.db.collection(collection).find().toArray();
    }
    async getOne(collection, id) {
        return this.db.collection(collection).find({ _id: id });
    }
    async create(collection, data) {
        return this.db.collection(collection).insertOne(data);
    }
    async update(collection, id, data) {
        return this.db.collection(collection).updateOne({ _id: id }, data);
    }
    async delete(collection, id) {
        return this.db.collection(collection).deleteOne({ _id: id });
    }
}

module.exports = { MongoRepository };