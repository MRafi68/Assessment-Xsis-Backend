var express = require('express');
const res = require('express/lib/response');
const Validator = require('fastest-validator');
var router = express.Router();

const { Product } = require('../models');

const v = new Validator();

router.get('/', async (req, res) => {
    const products = await Product.findAll();
    return res.json(products);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const product = await Product.findByPk(id);
    return res.json(product || {});
});

router.post('/', async (req, res) => {
    const schema = {
        tittle: 'string',
        description: 'string'
    }

    const validate = v.validate(req.body, schema);

    if(validate.length){
        return res
            .status(400)
            .json(validate);
    }

    const product = await Product.create(req.body);

    res.json(product);
    
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    
    let product = await Product.findByPk(id);

    if (!product){
    return res.json ({message: 'Product not found'});
    }

    const schema = {
        tittle: 'string|optional',
        description: 'string|optional'
    }

    const validate = v.validate(req.body, schema);

    if(validate.length){
        return res
            .status(400)
            .json(validate);
    }

    product = await product.update(req.body);
    res.json(product);

});

router.delete('/:id', async(req, res) => {

    const id = req.params.id;
    
    const product = await Product.findByPk(id);

    if (!product){
    return res.json ({message: 'Product not found'});
    }

    await product.destroy();

    res.json({
        message: 'Product is deleted'
    });

});

module.exports = router;