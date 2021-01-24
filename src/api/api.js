import axios from "axios";
import store from "../store/index.js";

const apiKey = "coinranking5b28e3dd48b69de5eed1338b17c63c896ad0ea3d341f007f";
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const apiurl = "https://api.coinranking.com/v2/coins";
let coniObjects = []

const get_data = () => {
    axios.get(proxyurl + apiurl, {
        headers: { 'x-access-token': apiKey }
    }).then(res => {
        console.log("res from api server:", res.data.data.coins);
        response_processor(res.data.data.coins)
    });
}

const response_processor = (coinsList) => {
    coinsList.map((coin) => {
        let temp = {}
        store.state.coinAttributes.map((attribute) => {
            temp[attribute] = coin[attribute];
        });
        coniObjects.push(temp);
    })
    store.commit('setApiResults', coniObjects);
}


export default get_data;
window.setInterval(() => { get_data(); }, store.state.refreshRate * 1000);