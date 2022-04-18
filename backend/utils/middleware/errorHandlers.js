const boom = require('@hapi/boom');
const { dev } = require('../../config');

const withErrorStack = (err, stack) => {
  if (dev) {
    return { ...err, stack };
  }

  return err;
};

const logError = (err, _req, _res, next) => {
  console.log(err);
  next(err);
};

const wrapError = (err, _req, _res, next) => {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }

  next(err);
};

const errorHandler = (err, _req, res, _next) => {
  const {
    output: { statusCode, payload },
  } = err;

  res.status(statusCode).json(withErrorStack(payload, err.stack));
};

module.exports = {
  logError,
  wrapError,
  errorHandler,
};
