const { notFound } = require('@hapi/boom');

module.exports = (_req, res) => {
  const {
    output: { statusCode, payload },
  } = notFound();
  res.status(statusCode).json(payload);
};
