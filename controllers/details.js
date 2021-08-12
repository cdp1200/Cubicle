const mongoose = require('mongoose')
const Cube = require('../models/cubemodel')

module.exports = details = function (req, res) {
    var theId = req.params.id
    Cube.findById(theId).exec((err, cube) => {
        // console.log(cube)
        res.render('details', {theCube: cube})
    })
}