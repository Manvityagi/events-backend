const router = require('express').Router();

router.use('/',require('./CRUD_payment'));
router.use('/',require('./monthlyPaymnet'));
router.use('/',require('./tillNow'));


module.exports = router;