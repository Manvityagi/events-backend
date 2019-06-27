const router = require('express').Router();

router.use('/:client_id',require('./cards_data'));
// router.use('/',require('./fetch_events'));

module.exports = router;