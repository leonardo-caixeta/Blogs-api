const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || 'xarai';

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const newToken = (data) => {
  const token = jwt.sign(
    { userEmail: data },
    secretKey,
    jwtConfig,
  );
  return token;
};

module.exports = newToken;