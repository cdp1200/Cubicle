const homePage = require('../controllers/homePage');
const createCubeRender = require('../controllers/createCubeRender');
const about = require('../controllers/about');
const details = require('../controllers/details');
const createAccessoryRender = require('../controllers/createAccessoryRender');
const attachAccessory = require('../controllers/attachAccessory');
const createCubePost = require('../controllers/createCubePost');
const createAccessoryPost = require('../controllers/createAccessoryPost');
const errorReport = require('../controllers/error');

module.exports = (app) => {
    app.get('/', homePage);
    app.get('/create', createCubeRender);
    app.get('/about', about);
    app.get('/details/:id', details);
    app.get('/createAccessory', createAccessoryRender);
    app.get("/attachAccessory", attachAccessory);
    app.post('/create', createCubePost);
    app.post('/createAccessory', createAccessoryPost);
    app.get('/*', errorReport);
}