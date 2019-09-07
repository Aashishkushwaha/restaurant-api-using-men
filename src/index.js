import http from 'http';
import express from 'express';
import bodeParser from 'body-parser';
import mongoose from 'mongoose';

import config from './config';
import routes from './routes';

let app = express();
app.server = http.createServer(app);

// Middlewares
app.use(bodeParser.json({
  limit: config.bodyLimit
}));


// passport config

// api routes v1
app.use('/v1', routes);

app.server.listen(config.port);
console.log("server is listening on " + app.server.address().port);

export default app;
