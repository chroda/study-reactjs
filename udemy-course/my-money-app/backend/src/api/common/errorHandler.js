const _ = require('lodash');

module.exports = (req, res, next) => {
  const bundle = res.locals.bundle;

  if(bundle.errors) {
    const errors = parseErrors(bundle.erros);
    res.status(500).json({errors});
  } else {
    next();
  }
}

const parseErrors = (nodeRestulErrors) => {
  const errors = [];
  _.forIn(nodeRestulErrors, error => errors.push(error.message));
  return errors;
}
