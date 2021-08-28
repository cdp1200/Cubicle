module.exports = about = function (req, res) {
    res.render('about', {theToken: req.cookies.token})
}