const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const Cube = require('../models/cubemodel');


module.exports = homePage = function (req, res) {
    // console.log(res.token)
    // console.log(req.cookie)
    // console.log(req.cookies.token);
    // console.log(req.token)
    Cube.find(function(err, cubes) {
        if(err) return console.error(err);
        res.render('index', {theCubes: cubes, theToken: req.cookies.token})
    })
}