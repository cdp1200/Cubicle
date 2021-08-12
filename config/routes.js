const url = require('url');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose')
const Cube = require('../models/cubemodel')
const Accessory = require('../models/accessory')



module.exports = (app) => {
    app.get('/', function (req, res) {
        Cube.find(function(err, cubes) {
            if(err) return console.error(err);
            res.render('index', {theCubes: cubes})
        })
    });
    app.get('/create', function (req, res) {
        res.render('create');
    });
    app.get('/about', function (req, res) {
        res.render('about')
    });
    app.get('/details/:id', function (req, res) {
        var theId = req.params.id
        Cube.findById(theId).exec((err, cube) => {
            // console.log(cube)
            res.render('details', {theCube: cube})
        })
    });
    app.get('/about', function (req, res) {
        res.render('about');
    });
    app.get('/createAccessory', function (req, res) {
        res.render('createAccessory');
    });
    app.get("/attachAccessory", function (req, res) {
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
    });
    app.post('/create', function (req, res) {
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
    });
    app.post('/createAccessory', function (req, res) {
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
    })
    app.get('/*', function (req, res) {
		res.status(404).render("error");
	});
}