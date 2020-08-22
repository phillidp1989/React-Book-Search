module.exports = {
  // Check if user is authenticated
  authCheck: (req, res, next) => {
    if (req.user) {
      return next();
    }
    res.redirect('http://localhost:3000/');
  },
  // Check if user is not authenticated
  guestCheck: (req, res, next) => {
    if (!req.user) {
      return next();
    }
    res.redirect('http://localhost:3000/');
  },
};
