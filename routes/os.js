const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('header.html');
});

module.exports = router;
