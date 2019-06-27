const router = require('express').Router();

router.use('/',require('./CR_event'));
router.use('/',require('./fetch_events'));

module.exports = router;