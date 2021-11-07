const express = require('express')
const app = express()
const port = process.env.PORT || 3333;
const {getAnswer} = require('./services/question.service')
var logger = require('morgan');

app.use(logger('dev'));


app.get('/', (req, res) => {
  const {q} = req.query;
  res.send(getAnswer(q));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})