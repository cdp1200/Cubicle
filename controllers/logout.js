router.get("/logout", function (req, res, next) {
	res.clearCookie("token");
	res.clearCookie("loggedIn");
	res.redirect("/");
});
