const router = require('express').Router();

router.use('./event',require('./event'));
router.use('./venue',require('./venue'));

module.exports = router;
