const mongoose = require('mongoose')
const Cube = require('../models/cubemodel')


module.exports = homePage = function (req, res) {
    Cube.find(function(err, cubes) {
        if(err) return console.error(err);
        res.render('index', {theCubes: cubes})
    })
}