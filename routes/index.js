const routes = require('express').Router(),
      adminRoutes  = require('./admin'),
      clientRoutes = require('./client'),
      userRoutes   = require('./user'),
      Venue = require('../models/venue'),
      passport = require('passport');

const auth = require('./auth'),
      testing = require('./testingUserAuth');

require('../passport');

routes.use('/auth', auth);
routes.use('/user', passport.authenticate('jwt', {session: false}), testing);

routes.use('/admin', adminRoutes);
routes.use('/client', clientRoutes);
routes.use('/user', userRoutes);

routes.get('/', (req,res)=> {
    console.log("hey")
    Venue.find({
        city: "delhi"
    }, (err,docs) => {
        console.log(docs);
    });
});

module.exports = routes;
