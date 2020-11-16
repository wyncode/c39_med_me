require('./db/config');
const express = require('express'),
  path = require('path'),
  openRoutes = require('./routes/open/index');

const app = express();
const patientsRouter = require('./routes/patients');
const ordersRouter = require('./routes/orders');

//Middleware
app.use(express.json());
// Unauthenticated routes
app.use(openRoutes);
// Serve any static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Any authentication middleware and related routing would be here.

app.use('/api/patients', patientsRouter);
app.use('/api/orders', ordersRouter);
// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
module.exports = app;
