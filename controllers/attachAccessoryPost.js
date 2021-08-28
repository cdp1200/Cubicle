const mongoose = require('mongoose')
const Cube = require('../models/cubemodel')
const Accessory = require('../models/accessory')

module.exports = attachAccessoryPost = async function(req, res) {
    var theId = req.params.id
    var body = req.body.accessory;
    var theCube = await Cube.findById(theId);
    var accessoryFlag = false;
    // var accessories = await Accessory.findById(body);

    for(accessory of theCube.accessories) {
        console.log(accessory)
        if(accessory == body) {
            console.log('already attached...', accessory)
            accessoryFlag = true;
        }
    }

    if(!accessoryFlag) {
        var cubeAccessories = await theCube.populate('accessories');
        cubeAccessories.accessories.push(body);
        cubeAccessories.save(function(err, tempCube) {
            if(err) return console.error(err);
        })
    } 

    // var theCube2 = await Cube.findById(theId);
    // console.log(theCube2)
    // // console.log(theCube)
    
        Cube.find(function(err, cubes) {
        if(err) return console.error(err);
        res.render('index', {theCubes: cubes})
    })
}