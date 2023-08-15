const jsw = require("jsonwebtoken");

const tokenVarification = (req, res, next) => {
  if (req.headers.authorization) {
    const jwtToken = req.headers.authorization;
    jsw.verify(
      jwtToken,
      "hirak",
      // process.env.JWTKEY
      (err, decode) => {
        if (err) {
          return res.status(401).json({
            status: "Unauthorized  !!",
            message: "Authentication failed. Please login again.",
          });
        }
        req.userId = decode.data;
        next();
      }
    );
  } else {
    res.status(401).json({
      status: "failed!!!! ",
      messege: "token missing ",
    });
  }
};

module.exports = tokenVarification;
