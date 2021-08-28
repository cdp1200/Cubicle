const mongoose = require('mongoose')
const Cube = require('../models/cubemodel')
const Accessory = require('../models/accessory')

module.exports = details = async function (req, res) {
    var theId = req.params.id
    var cube = await Cube.findById(theId);
    var theAccessories = [];

    for(eachAccessory of cube.accessories) {
        var theAccessory = await Accessory.findById(eachAccessory);
        theAccessories.push(theAccessory);
    }

    res.render('details', {theCube: cube, accessories: theAccessories})
}