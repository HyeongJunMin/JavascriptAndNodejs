const express = require('express');
const router = express.Router();

const myTitle = 'ok';

router.get('/', function(req, res, next) {
  /* GET home page. */
  // res.render('index', { title: 'Express' });
  res.render('index', { title: {myTitle}});
});

module.exports = router;
