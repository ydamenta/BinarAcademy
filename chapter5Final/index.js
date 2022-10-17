const express = require('express');
const app = express();
const port = 12345;
const path = require('path');
const router = require('./router');


app.use(express.json());
app.use(express.static(__dirname + '/public/'));
console.log(__dirname);
app.use(router);

app.listen(port, () => {
    console.log(`Server is running at Port : ${port}`);
});