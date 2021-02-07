const axios = require('axios');

const apiKey = "coinranking8ca85afe2cff95368f950772b2005d389702d60a30188905";
const apiurl = "https://api.coinranking.com/v2/coins";
let coniObjects = [];
let coinAttributes = ["symbol", "name", "iconUrl", "price", "change", "rank", "marketCap"];

const get_data = () => {
    return new Promise((resolve, reject) => {
        console.log("get_data in api.js is called");
        axios.get(apiurl, {
            headers: { 'x-access-token': apiKey }
        }).then(res => {
            let processed_data = response_processor(res.data.data.coins);
            if (processed_data) {
                resolve(processed_data);
                return;
            }
            return reject(new Error("error in fetching currencies."));

        });
    });
}

const response_processor = (coinsList) => {
    coinsList.map((coin) => {
        let temp = {}
        coinAttributes.map((attribute) => {
            temp[attribute] = coin[attribute];
        });
        coniObjects.push(temp);
    });
    return coniObjects;
}

module.exports = { get_data }