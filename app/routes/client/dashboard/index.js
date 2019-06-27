const router = require('express').Router();

router.use('/',require('./cards_data'));
// router.use('/',require('./fetch_events'));

module.exports = router;