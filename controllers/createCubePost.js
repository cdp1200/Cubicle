const mongoose = require('mongoose')
const Cube = require('../models/cubemodel')

module.exports = createCubePost = function (req, res) {
    let body = req.body;
    
    var newCube = {
        name: body.name,
        description: body.description,
        imageUrl: body.imageUrl,
        difficultyLevel: body.difficultyLevel,
      //   accessories: [{ type: Schema.Types.ObjectId, ref: 'Accessory'}]
      
      }
    let tempCube = new Cube(newCube);
    tempCube.save(function(err, tempCube) {
        if(err) return console.error(err);
        console.log(tempCube);
    })
        Cube.find(function(err, cubes) {
            if(err) return console.error(err);
            res.render('index', {theCubes: cubes})
        })
}