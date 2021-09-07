const router = require('express').Router();

router.get('/part-two', (req, res) => {
  res.render('part-two/part-two.html');
});

router.get('/part-two/no-memory-abstraction', (req, res) => {
  res.render('part-two/part-two__nma.html');
});

router.get('/part-two/address-spaces', (req, res) => {
  res.render('part-two/part-two__as.html');
});

router.get('/part-two/virtual-memory', (req, res) => {
  res.render('part-two/part-two__vm.html');
});

router.get('/part-two/page-replacement-algorithms', (req, res) => {
  res.render('part-two/part-two__pra.html');
});

router.get('/part-two/implementation-issues', (req, res) => {
  res.render('part-two/part-two__ii.html');
});

router.get('/part-two/segmentation', (req, res) => {
  res.render('part-two/part-two__segmentation.html');
});

module.exports = router;
