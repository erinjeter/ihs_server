module.exports = (req, res, next) => {
  res.header("access-control-allow-origin", "*"); // tells the browser to allow code from any origin.
  res.header("access-control-allow-methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "access-control-allow-headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  next();
};
