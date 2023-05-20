const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err) => {
      if (err) return res.sendStatus(403);
      next(err);
    });
  } else {
    res.sendStatus(401);
  }
};

exports.verifyToken = verifyToken;
