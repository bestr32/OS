const router = require('express').Router();

router.get('/part-five', (req, res) => {
  res.render('part-five/part-five.html');
});

router.get('/part-five/resources', (req, res) => {
  res.render('part-five/part-five__resources.html');
});

router.get('/part-five/deadlocks-intro', (req, res) => {
  res.render('part-five/part-five__deadlocks-intro.html');
});

router.get('/part-five/detection-recovery', (req, res) => {
  res.render('part-five/part-five__detection-recovery.html');
});

router.get('/part-five/avoidance', (req, res) => {
  res.render('part-five/part-five__avoidance.html');
});

router.get('/part-five/prevention', (req, res) => {
  res.render('part-five/part-five__prevention.html');
});

router.get('/part-five/other-issues', (req, res) => {
  res.render('part-five/part-five__other-issues.html');
});

module.exports = router;
