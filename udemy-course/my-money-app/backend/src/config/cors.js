modules.esports = (req, res, next) => {
  res.header('Access-Control-Allow-Origen','*');
  res.header('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
  res.header('Access-Control-Allow-','Origin, X-Requested-With, Content-Type, Accept');
  next();
}
