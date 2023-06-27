var express = require('express');
const ToyModel = require('../models/ToyModel')
var router = express.Router();

router.get('/', async (req, res) => {
    res.render('index')
})

router.get('/all', async (req, res) => {
    var toys = await ToyModel.find({})
    res.render('all', { toys : toys })
})

router.get('/add', (req, res) => {
    res.render('add')
})

router.post('/add', async (req, res) => {
    var toy = req.body
    await ToyModel.create(toy)
    res.redirect('/all')
})

router.post('/search', async (req, res) => {
    var keyword = req.body.keyword
    var toys = await ToyModel.find({name: new RegExp(keyword, "i")})
    res.render('search', { toys: toys })
})

router.get('/edit/:id', async (req, res) => {
    var toy = await ToyModel.findById(req.params.id)
    res.render('edit', { toy : toy })
})

router.post('/edit/:id', async (req, res) => {
    var { name, brand, source, price, quantity, image, video, category } = req.body
    await ToyModel.findByIdAndUpdate(req.params.id, { name, brand, source, price, quantity, image, video, category })
    res.redirect('/all')
})

router.get('/delete/:id', async (req, res) => {
    var id = req.params.id
    var toy = await ToyModel.findById(id)
    await ToyModel.deleteOne(toy)

    res.redirect('/all')
})

router.get('/toy_card', async (req, res) => {
    var toys = await ToyModel.find({})
    res.render('toy_card', { toys: toys })
})

router.get('/detail/:id', async (req, res) => {
    var toy = await ToyModel.findById(req.params.id);
    res.render('toy_detail', { toy : toy })
})

module.exports = router;
