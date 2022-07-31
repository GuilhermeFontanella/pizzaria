const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors);

mongoose.connect('mongodb://localhost:27017/pizzaria', 
{useNewUrlParser: true}
);

app.use('/pizzas', product_controller);

app.listen(3000);
