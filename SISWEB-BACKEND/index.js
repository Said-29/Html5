const express = require('express')
const morgan = require('morgan')
const db = require('./src/models')

import apiRouter from './src/routes';

const app = express()
const port = 3030

db.sequelize.sync({force: true}).then(() => {
 console.log("Synced db.");
 })
 .catch((err) => {
 console.log("Failed to sync db: " + err.message);
 });

app.use(morgan('dev'))
app.use(express.json());
app.use(apiRouter);

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})
