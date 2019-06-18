const router = require('express').Router();

router.use('/coupons',require('./coupon'));
router.use('/events',require('./event'));
router.use('/venues',require('./venue'));
router.use('/',require('./login'));

module.exports = router;

