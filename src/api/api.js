import axios from "axios";

const apiKey = "coinranking5b28e3dd48b69de5eed1338b17c63c896ad0ea3d341f007f";
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const apiurl = "https://api.coinranking.com/v2/coins";
const coinAttributes = ["symbol", "name", "iconUrl", "price", "change"]
const get_data = () => {
    axios.get(proxyurl + apiurl, {
        headers: { 'x-access-token': apiKey }
    }).then(res => {
        console.log("res from api server:", res);
        response_processor(res.data.data.coins)
    });
}

const results = []

const response_processor = (coinsList) => {
    let temp = {}
    coinsList.map(coin => {
        coinAttributes.map(attribute => temp[attribute] = coin[attribute]);
        results.push(temp);
    });
    console.log("results object:", results)
}

const saveToStore = (results) => {

}
export default get_data;

