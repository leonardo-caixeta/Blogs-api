const { Category } = require('../models');
const { validNewCategory } = require('./validations/schemas');

const createUser = async (name) => {
  const { error } = validNewCategory.validate({ name });

  if (error) return { status: 'INVALID_VALUE', data: { message: error.message } };

  const user = await Category.findOne({
    where: { name },
  });

  if (await user) {
    return { status: 'CONFLICT', data: { message: 'User already registered' } };
  }

  return { status: 'CREATED', data: user };
};

module.exports = {
  createUser,
};