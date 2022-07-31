var express = require('express');
var router = express.Router();
var Product = require('./web-api/product');

router.post('/', function(req, res) {
    console.log(req.body);
    let p = new Product({
        name: req.body.name,
        price: req.body.price,
        available: req.body.available
    })
    p.save((err, prod) => {
        if (err) 
            res.status(500).send(err);
        else
            res.status(200).send(prod); 
    })
});

router.get('/', function(req, res) {
    p.find().exec((err, prods) => {
        if (err) 
            res.status(500).send(err);
        else
            res.status(200).send(prods); 
    })
});