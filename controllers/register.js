module.exports = register = function (req, res) {
    res.render('registerPage', {theToken: req.cookies.token});
}