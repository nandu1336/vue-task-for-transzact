const express = require('express')
const cors = require('cors')
const path = require('path')
const api = require('./api')

const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, '/dist')));


let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}

app.get('/', (req, res) => {
    res.sendFile(path.join(root, './dist/index.html'));
});

app.get('/api/data', (req, res) => {
    console.log("request for api data received at express backend.");
    api.get_data().then(data => res.json(data));
})
app.listen(port, console.log("listening on port:", port));