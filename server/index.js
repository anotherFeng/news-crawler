const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const newsRouter = require('./routes/news');

const app = express();

app.use('/static', express.static(path.join(__dirname, '../client/build/static')));
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/news', newsRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404);
});

app.listen('4000', () => {});

module.exports = app;
