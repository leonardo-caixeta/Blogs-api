const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const extractToken = (bearerToken) => bearerToken.split(' ')[1];

module.exports = (req, res, next) => {
  const bearerToken = req.header('Authorization');
  const token = extractToken(bearerToken);

  if (!bearerToken) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);

    req.user = payload;

    next();
  } catch (err) {
    return res.status(401).json({
      message: 'Expired or invalid token',
    });
  }
};