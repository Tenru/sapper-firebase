const functions = require('firebase-functions');
const compression = require('compression');
const express = require('express')
const app = express()
const { customMiddleware } = require('./__sapper__/build/server/server');
app.use(
    compression({ threshold: 0 }),
    customMiddleware()
);
exports.ssr = functions.https.onRequest(app);