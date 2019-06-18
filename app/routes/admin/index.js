const router = require('express').Router();

router.use('/events',require('./events'));
router.use('./venues',require('./venues'));
router.use('./', require('./login'));

module.exports = router;