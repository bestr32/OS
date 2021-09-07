const router = require('express').Router();

router.get('/part-one', (req, res) => {
  res.render('part-one/part-one.html');
});

router.get('/part-one/processes', (req, res) => {
  res.render('part-one/part-one__processes.html');
});

router.get('/part-one/threads', (req, res) => {
  res.render('part-one/part-one__threads.html');
});

router.get('/part-one/interprocess-communication', (req, res) => {
  res.render('part-one/part-one__interprocess-communication.html');
});

router.get('/part-one/scheduling', (req, res) => {
    res.render('part-one/part-one__scheduling.html');
  });

module.exports = router;
