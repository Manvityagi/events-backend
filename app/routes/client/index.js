const router = require('express').Router();

router.use('/coupons',require('./coupon'));
router.use('/events',require('./event'));
router.use('/venues',require('./venue'));
router.use('/payments',require('./payment'));
router.use('/dashboard',require('./dashboard'));
//router.use('/',require('./login'));

module.exports = router;

