const router = require('express').Router();

router.get('/part-seven', (req, res) => {
  res.render('part-seven/part-seven.html');
});

router.get('/part-seven/multiprocessors', (req, res) => {
  res.render('part-seven/part-seven__multiprocessors.html');
});

router.get('/part-seven/multicomputers', (req, res) => {
  res.render('part-seven/part-seven__multicomputers.html');
});

router.get('/part-seven/distributed-systems', (req, res) => {
  res.render('part-seven/part-seven__distributed-systems.html');
});

module.exports = router;
