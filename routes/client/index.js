const router = require('express').Router();

router.use('/:client_id/coupons',require('./coupon'));
router.use('/:client_id/events',require('./event'));
router.use('/:client_id/venues',require('./venue'));
router.use('/:client_id/payments',require('./payment'));
router.use('/:client_id/dashboard',require('./dashboard'));
router.use('/',require('./login'));

module.exports = router;

