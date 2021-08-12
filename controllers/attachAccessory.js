const mongoose = require('mongoose')
const Cube = require('../models/cubemodel')
const Accessory = require('../models/accessory')

module.exports = attachAccesory = function (req, res) {
    Accessory.find(function(err, accessories) {
        if(err) console.error(err);
        res.render('attachAccessory', {theAccessories: accessories})
    })
    // console.log(req.params)
    // var theId = req.params.id
    // Cube.findById(theId).exec((err, cube) => {
    //     console.log(cube)
    //     res.render('attachAccessory', {theCube: cube})
    // })
}