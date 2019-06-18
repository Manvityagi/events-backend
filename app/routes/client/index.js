const router = require('express').Router();

router.use('./event',require('./event'));
router.use('./venue',require('./venue'));
router.use('/',require('./login'));

module.exports = router;

