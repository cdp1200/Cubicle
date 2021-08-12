const mongoose = require('mongoose')
const Accessory = require('../models/accessory')

module.exports = createAccessoryPost = function (req, res) {
    let body = req.body;

    var newAccessory = {
        name: body.name,
        description: body.description,
        imageUrl: body.imageUrl
    }

    let tempAccess = new Accessory(newAccessory);
    tempAccess.save(function(err, tempAccess) {
        if(err) return console.error(err);
        console.log(tempAccess);
    })
    
        Cube.find(function(err, cubes) {
            if(err) return console.error(err);
            res.render('index', {theCubes: cubes})
        })
}