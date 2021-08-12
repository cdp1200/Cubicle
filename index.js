const env = process.env.NODE_ENV || 'development';
const exphbs = require('express-handlebars');
const config = require('./config/config')[env];
const app = require('express')();
const mongoose = require('mongoose');
const db = mongoose.connection;

require('./config/express')(app);
require('./config/routes')(app);

mongoose.connect("mongodb+srv://@cluster0.zbswd.mongodb.net/?retryWrites=true&w=majority",  {
    dbName: "Cubes",
    user: "cdp1200",
    pass: "mongopass",
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
	.then((res) => console.log("Db connected"))
	.catch((err) => console.log(err));

	db.on('error', console.error.bind(console, 'connection error'));


app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));