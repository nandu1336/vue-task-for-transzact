import axios from "axios";
import store from "../store/index.js";

const apiKey = "coinranking8ca85afe2cff95368f950772b2005d389702d60a30188905";
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const apiurl = "https://api.coinranking.com/v2/coins";
let coniObjects = [];

const get_data = () => {
    axios.get(proxyurl + apiurl, {
        headers: { 'x-access-token': apiKey }
    }).then(res => {
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
window.setInterval(() => {
    get_data();
    store.commit('setLastRefreshTime', new Date().toLocaleTimeString().split("(")[0]);
}, store.state.refreshRate * 1000);