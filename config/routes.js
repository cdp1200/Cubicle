const homePage = require('../controllers/homePage');
const createCubeRender = require('../controllers/createCubeRender');
const about = require('../controllers/about');
const details = require('../controllers/details');
const createAccessoryRender = require('../controllers/createAccessoryRender');
const attachAccessory = require('../controllers/attachAccessory');
const createCubePost = require('../controllers/createCubePost');
const createAccessoryPost = require('../controllers/createAccessoryPost');
const attachAccessoryPost = require('../controllers/attachAccessoryPost')
const errorReport = require('../controllers/error');
const register = require('../controllers/register');
const registerPost = require('../controllers/registerPost');
const login = require('../controllers/login');
const loginPost = require('../controllers/loginPost')
const edit = require('../controllers/editCube');
const deleteCube = require('../controllers/deleteCube');


module.exports = (app) => {
    app.get('/', homePage);
    app.get('/create', createCubeRender);
    app.get('/about', about);
    app.get('/details/:id', details);
    app.get('/createAccessory', createAccessoryRender);
    app.get("/attachAccessory/:id", attachAccessory);
    app.get('/register', register);
    app.get('/login', login);
    app.get('/edit/:id', edit);
    app.get('/deleteCube/:id', deleteCube);
    app.post('/create', createCubePost);
    app.post('/createAccessory', createAccessoryPost);
    app.post('/attachAccessory/:id', attachAccessoryPost);
    app.post('/registerPost', registerPost);
    app.post('/loginPost', loginPost);
    app.get('/*', errorReport);
}