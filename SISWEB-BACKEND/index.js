const express = require('express')
const morgan = require('morgan')

import apiRouter from './src/routes';

const app = express()
const port = 3030

app.use(morgan('dev'))
app.use(express.json());
app.use(apiRouter);

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})
