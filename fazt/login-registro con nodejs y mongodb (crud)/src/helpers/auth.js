module.exports = {
  isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      return res.redirect("/users/signin");
    }
	},
	isNotAuthenticated(req, res, next) {
		if (!req.isAuthenticated()) {
			return next();
		} else {
			return res.redirect('/notes');
		}
	}
};
