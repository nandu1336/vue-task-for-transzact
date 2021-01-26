const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '/dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.sendFile(path.join(root, './dist/index.html'));
});

app.listen(port, console.log("server started on port:", port));