require('./db/config');
const express = require('express'),
  path = require('path'),
  passport = require('./middleware/authentication'),
  openRoutes = require('./routes/open');
const app = express();
const usersRouter = require('./routes/secure/users');
const ordersRouter = require('./routes/secure/order');
const medicineRouter = require('./routes/secure/medicine');
const cookieParser = require('cookie-parser');

//Middleware

app.use(express.json());
app.use(cookieParser());

// Unauthenticated routes

app.use('/api', openRoutes);

// Serve any static files

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
// Any authentication middleware and related routing would be here.

app.use('/api/*', passport.authenticate('jwt', { session: false }));
app.use('/api/users', usersRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/medicine', medicineRouter);

// Handle React routing, return all requests to React app

if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
module.exports = app;
