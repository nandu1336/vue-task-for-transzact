const express = require('express')
const cors = require('cors')
const path = require('path')

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

app.listen(port, console.log("server started on port:", port));