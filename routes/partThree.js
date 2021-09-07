const router = require('express').Router();

router.get('/part-three', (req, res) => {
  res.render('part-three/part-three.html');
});

router.get('/part-three/files', (req, res) => {
  res.render('part-three/part-three__files.html');
});

router.get('/part-three/directories', (req, res) => {
  res.render('part-three/part-three__directories.html');
});

router.get('/part-three/file-system-implementation', (req, res) => {
  res.render('part-three/part-three__fsi.html');
});

router.get('/part-three/file-system-management-optimization', (req, res) => {
  res.render('part-three/part-three__fs-mo.html');
});


module.exports = router;
