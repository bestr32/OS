const router = require('express').Router();

router.get('/part-eight', (req, res) => {
  res.render('part-eight/part-eight.html');
});

router.get('/part-eight/security-environment', (req, res) => {
  res.render('part-eight/part-eight__security-environment.html');
});

router.get('/part-eight/os-security', (req, res) => {
  res.render('part-eight/part-eight__os-security.html');
});

router.get('/part-eight/access-control', (req, res) => {
  res.render('part-eight/part-eight__access-control.html');
});

router.get('/part-eight/formal-models', (req, res) => {
  res.render('part-eight/part-eight__formal-models.html');
});

router.get('/part-eight/cryptography-basics', (req, res) => {
  res.render('part-eight/part-eight__cryptography-basics.html');
});

router.get('/part-eight/authentication', (req, res) => {
  res.render('part-eight/part-eight__authentication.html');
});

router.get('/part-eight/exploiting-software', (req, res) => {
  res.render('part-eight/part-eight__exploiting-software.html');
});

router.get('/part-eight/insider-attacks', (req, res) => {
  res.render('part-eight/part-eight__insider-attacks.html');
});

router.get('/part-eight/malware', (req, res) => {
  res.render('part-eight/part-eight__malware.html');
});

router.get('/part-eight/defenses', (req, res) => {
  res.render('part-eight/part-eight__defenses.html');
});

module.exports = router;
