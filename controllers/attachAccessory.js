const mongoose = require('mongoose')
const Cube = require('../models/cubemodel')
const Accessory = require('../models/accessory')


module.exports = attachAccesory = async function (req, res) {
    var theId = req.params.id
    var cube = await Cube.findById(theId)
    var theAccessories1 = await Accessory.find();
    // .exec((err, cube) => {
    //     if(err) console.error(err);
    //     return cube
    // })
    if(cube.accessories.length === theAccessories1.length) {
        console.log("it's a full array", cube.accessories);
        res.render('attachAccessoriesFullView', {theCube: cube});
    } else {
        res.render('attachAccessory', {theAccessories: theAccessories1, theCube: cube});
    }
    
    
    
}