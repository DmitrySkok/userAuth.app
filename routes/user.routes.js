const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
  res.render('logged', {user: req.user._json.name, image: req.user._json.picture});
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', (req, res) => {
  res.render('profile');
});

router.get('/profile/settings', (req, res) => {
  res.render('settings');
});

router.get('/logout', (req, res) => {
  req.logout();
  res.render('logout');
});


module.exports = router;