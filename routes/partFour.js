const router = require('express').Router();

router.get('/part-four', (req, res) => {
  res.render('part-four/part-four.html');
});

router.get('/part-four/io-hardware', (req, res) => {
  res.render('part-four/part-four__io-hardware.html');
});

router.get('/part-four/io-software', (req, res) => {
  res.render('part-four/part-four__io-software.html');
});

router.get('/part-four/io-software-layers', (req, res) => {
  res.render('part-four/part-four__io-software-layers.html');
});

router.get('/part-four/io-disks', (req, res) => {
  res.render('part-four/part-four__io-disks.html');
});

router.get('/part-four/io-clocks', (req, res) => {
  res.render('part-four/part-four__io-clocks.html');
});

router.get('/part-four/io-ui-kmm', (req, res) => {
  res.render('part-four/part-four__io-ui-kmm.html');
});

module.exports = router;
