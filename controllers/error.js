module.exports = errorReport = function (req, res) {
    res.status(404).render("error");
}