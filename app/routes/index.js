const routes = require('express').Router(),
      adminRoutes  = require('./admin'),
      clientRoutes = require('./client'),
      userRoutes   = require('./user');

routes.use('/admin', adminRoutes);
routes.use('./client', clientRoutes);
routes.use('./user', userRoutes);

module.exports = routes;
