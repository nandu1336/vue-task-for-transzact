const express = require('express')
const cors = require('cors')
const path = require('path')
// const bodyParser = require('body-parser');

const app = express()
app.use(cors())

app.use(express.static(path.join(__dirname, '/dist')));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}

app.get('/', (req, res) => {
    res.sendFile(path.join(root, './dist/index.html'));
});

app.listen(port, console.log("server started on port:", port));