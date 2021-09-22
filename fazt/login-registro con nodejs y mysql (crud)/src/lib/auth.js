module.exports = {
  isLoggedIn(req, res, next) {
  	// console.log(req);
  	if (req.isAuthenticated()) {
  		// console.log(user);
  		return next();
  	}
  	return res.redirect('/signin');
	},
	
	isNotLoggedIn(req, res, next) {
  	// console.log(req);
  	if (!req.isAuthenticated()) {
  		return next();
  	}
  	return res.redirect('/profile');
  }

};
