class MainService {
    constructor(mongoRepository) {
        this.mongoRepository = mongoRepository;
    }

    async getAll(collection) {
        try {
            const result = await this.mongoRepository.getAll(collection);
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    async getOne(collection, id) {
        try {
            const result = await this.mongoRepository.getOne(collection, id);
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    async create(collection, data) {
        try {
            const result = await this.mongoRepository.create(collection, data);
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    async update(collection, id, data) {
        try {
            const result = await this.mongoRepository.update(collection, id, data);
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    async delete(collection, id) {
        try {
            const result = await this.mongoRepository.delete(collection, id);
            return result;
        } catch (error) {
            console.log(error);
        }
    }
}