const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const User = require('../models/user');
const Cube = require('../models/cubemodel')

module.exports = loginPost = async function (req, res) {
    await User.findOne({username: req.body.username}, function (err, user) {
        // console.log(user);
        bcrypt.compare(req.body.password, user.password, (err, response) => {
            if(response) {
                var payload = {_id: user._id, username: user.username};
                var options = {expiresIn: '1h'};
                const secret = "SuperSecret";
                var token = jwt.sign(payload, secret, options);
                // console.log(token);
                res.cookie('token', token, { httpOnly: true, maxAge: 1000 * 1000 });
                res.cookie("loggedIn", true);
                res.redirect("/");
            }
        })
    });
}




//Login a registered user
// try {
//     console.log(req.body);
//     const { username, password } = req.body;
//     const user = await User.findByCredentials(username, password);
//     const token = await user.generateAuthToken();

//     // set token as a cookie
//     res.cookie("token", token, { httpOnly: true, maxAge: 10000 * 10000 });
//     res.cookie("loggedIn", true);

//     //res.send({ user, token });
//     res.redirect("/");
// } catch (error) {
//     console.log("It didn't work! ");
//     res.render("login", {
//         errors: "Login failed! Check authentication credentials",
//     });
// }


// template to display errors 

// {{#if errors}}
//      <div id="notifications">
     
// <div class="alert alert-warning" role="alert">
// {{errors}}
// </div>
//   </div>
//     {{/if}}
