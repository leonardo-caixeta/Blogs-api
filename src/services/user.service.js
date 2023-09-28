const { User } = require('../models');
const newToken = require('../auth/newtoken');
const { validLogin } = require('./validations/schemas');

const login = async (email, password) => {
  const { error } = validLogin.validate({ email, password });

  if (error) {
    return { status: 'REQUIRED_VALUE', data: { message: 'Some required fields are missing' } };
  }

  const users = await User.findOne({
    where: { email, password },
  });

  console.log('users', users);

  if (!users) {
    return { status: 'REQUIRED_VALUE', data: { message: 'Invalid fields' } };
  }

  const token = newToken(email);

  return { status: 'SUCCESSFUL', data: { token } };
};

module.exports = {
  login,
};