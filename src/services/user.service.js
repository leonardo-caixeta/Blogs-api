const { User } = require('../models');
const newToken = require('../auth/newtoken');
const { validLogin, validNewUser } = require('./validations/schemas');

const login = async (email, password) => {
  const { error } = validLogin.validate({ email, password });

  if (error) {
    return { status: 'INVALID_VALUE', data: { message: error.message } };
  }

  const users = await User.findOne({
    where: { email, password },
  });

  if (!users) {
    return { status: 'INVALID_VALUE', data: { message: 'Invalid fields' } };
  }

  const token = newToken(email);

  return { status: 'SUCCESSFUL', data: { token } };
};

const createUser = async (displayName, email, password, image) => {
  const { error } = validNewUser.validate({ displayName, email, password, image });

  if (error) return { status: 'INVALID_VALUE', data: { message: error.message } };

  const user = await User.findOne({
    where: { email, password, displayName },
  });

  if (user) {
    return { status: 'INVALID_VALUE', data: { message: 'User already registered' } };
  }

  const token = newToken(email);

  return { status: 'CREATED', data: token };
};

module.exports = {
  login,
  createUser,
};