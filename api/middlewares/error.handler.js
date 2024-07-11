export function logErrors(err, req, res, next) {
  console.log('LOG ERRORS');
  console.error(err);
  next(err);
}

export function errorHandler(err, req, res, next) {
  console.log('ERROR HANDLER');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

export function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}
