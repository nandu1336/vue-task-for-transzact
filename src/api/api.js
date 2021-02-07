import axios from "axios";
import store from "../store/index.js";

const get_data = () => axios.get('/api/data').then(res => store.commit('__setApiResults', res.data));
export default get_data;

window.setInterval(() => {
    get_data();
    store.commit('setLastRefreshTime', new Date().toLocaleTimeString().split("(")[0]);
}, store.state.refreshRate * 1000);