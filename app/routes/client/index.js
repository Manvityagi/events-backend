const router = require('express').Router();

router.use('/events',require('./event'));
router.use('/venues',require('./venue'));
router.use('/',require('./login'));

module.exports = router;

