const fs = require("fs");
const path = require("path");

function csvDataFormated() {
    const filePath = path.join(__dirname, "../data/file.csv");
    const text = fs.readFileSync(filePath, "utf8");

    const data = text.split("\r\n").filter((removeEmpties) => removeEmpties);

    //make a subset of three items, since each person is composed by three items
    const subsetOfThree = [];

    while (data.length) {
        subsetOfThree.push(data.splice(0, 3));
    }

    //format the subset, removing :, empty spaces etc
    const formatedSubset = subsetOfThree.map((item) => {
        return item.map((item) => {
            return item.replace(/.*:/, "").trim();
        });
    });

    //transform the subset into an object ready to be inserted into the database
    const csvAsJsObject = formatedSubset.map((item) => {
        const [nome, idade, cep] = item;
        return { nome: nome, idade: Number(idade), cep: cep };
    });

    return csvAsJsObject;
}

const csvData = csvDataFormated();

module.exports = { csvData };