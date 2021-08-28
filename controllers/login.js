module.exports = login = function (req, res) {
    res.render('loginPage', {theToken: req.cookies.token});
}