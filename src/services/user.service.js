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

const create = async (displayName, email, password, image) => {
  const { error } = validNewUser.validate({ displayName, email, password, image });

  if (error) return { status: 'INVALID_VALUE', data: { message: error.message } };

  const user = await User.findOne({
    where: { email, password, displayName, image },
  });

  if (await user) {
    return { status: 'CONFLICT', data: { message: 'User already registered' } };
  }

  await User.create({ displayName, email, password, image });

  const token = newToken(email);

  return { status: 'CREATED', data: { token } };
};

const getAll = async () => {
  const users = await User.findAll({
    attributes: ['displayName', 'email', 'image'],
  });

  return { status: 'SUCCESSFUL', data: users };
};

const getById = async (id) => {
  const user = await User.findOne({
    where: {
      id,
    },
    attributes: ['displayName', 'email', 'image', 'id'],
  });

  if (user === null) return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };

  return { status: 'SUCCESSFUL', data: user };
};

module.exports = {
  login,
  create,
  getAll,
  getById,
};