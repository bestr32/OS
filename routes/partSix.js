const router = require('express').Router();

router.get('/part-six', (req, res) => {
  res.render('part-six/part-six.html');
});

router.get('/part-six/requirements', (req, res) => {
  res.render('part-six/part-six__requirements.html');
});

router.get('/part-six/hypervisors', (req, res) => {
  res.render('part-six/part-six__hypervisors.html');
});

router.get('/part-six/techniques', (req, res) => {
  res.render('part-six/part-six__techniques.html');
});

router.get('/part-six/clouds', (req, res) => {
    res.render('part-six/part-six__clouds.html');
  });

module.exports = router;
