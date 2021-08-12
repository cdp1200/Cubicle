const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

module.exports = (app) => {

app.set("view engine", "hbs");
    app.engine(
	"hbs",
	exphbs({
		extname: "hbs",
		defaultLayout: "",
        layoutsDir: __dirname + "/views",
        partialsDir: __dirname + "/views",
	})
);
// app.use("view engine");
   app.use(bodyParser.urlencoded({extended: true}));

    app.use(express.static('static'));



    // View Engine Setup

// app.set('views', path.join(__dirname, 'views')); // setting folder for public files

// // register the partials, hint if it says module not found after you do this, its because the module most likely isn't there! Import it! 

// hbs.registerPartials(__dirname + '/views/partials'); 

// // setting view engine to hbs, engine compiles views and data into HTML

// app.set('view engine', 'hbs');



// app.set('views', path.join(__dirname, '../views'));
    // app.set('view engine', 'hbs');

    // app.use(express.static('views'));
    // app.use('/views', express.static('views'));
    // app.use('views', express.static(__dirname + './views'));

};