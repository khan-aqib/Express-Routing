const express = require('express');
const app = express();
const dotEnv = require('dotenv');
const path = require('path');

// configure dotEnv
dotEnv.config();

// configure static files for styles
app.use('/public', express.static('public'));

const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

// configure the router with express
app.use('/', require('./router/apiRouter'));

app.listen(port, hostname, () => {
    console.log(`Express Server is started at http://${hostname}:${port}`);
});
