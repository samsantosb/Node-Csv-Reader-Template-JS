const { MongoClient } = require('mongodb');
const { config } = require("dotenv");
const { MongoRepository } = require("../repositories/mongo.repository");
const { MainService } = require("../services/main.service");
const { csvData } = require("./csv.script");
config();

async function script() {
    const url = process.env.MONGO;
    const client = new MongoClient(url);
    const db = client.db("test");
    const csvCollection = "csv";
    console.log("Variaveis globais instanciadas");

    function factory() {
        const mongoRepository = new MongoRepository(db);
        const mainService = new MainService(mongoRepository);
        return mainService;
    }
    const service = factory();
    console.log("camada de serviços instanciada");

    await client.connect();
    console.log("conectado ao banco de dados");

    for (const item of csvData) {
        await service.create(csvCollection, item);
    }
    console.log("dados inseridos no banco de dados");

    // //console.log(await service.getAll(csvCollection));
    // const result = await service.getOne(csvCollection, "632a05a331539d5eced272c1");
    // console.log(result);


    await client.close();
    console.log("Conexão encerrada");
}

module.exports = { script };