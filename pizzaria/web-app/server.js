const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/pizzaria'));

app.get('/*', (req, res) => {
    res.sendFile('index.html', {root: 'dist/pizzaria'})
});

app.listen(process.env.PORT || 8080);