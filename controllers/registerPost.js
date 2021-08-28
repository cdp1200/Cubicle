const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 9;
const Cube = require('../models/cubemodel')
const User = require('../models/user');

module.exports = registerPost = function (req, res) {
    let body = req.body;

    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(body.password, salt, (err, hash) => {
                if(body.password === body.repeatPassword) {
                    let newUser = {
                        username: body.username,
                        password: hash
                    }
                    console.log(hash)
            
                    let tempUser = new User(newUser);
                    tempUser.save(function(err, tempCube) {
                        if(err) return console.error(err);
                        console.log(tempCube);
                    })
                }

                res.redirect('/login');
        })
    })

    // Cube.find(function(err, cubes) {
    //     if(err) return console.error(err);
    //     res.render('index', {theCubes: cubes})
    // })
}