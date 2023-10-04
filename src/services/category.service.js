const { Category } = require('../models');
const { validNewCategory } = require('./validations/schemas');

const create = async (name) => {
  const { error } = validNewCategory.validate({ name });

  if (error) return { status: 'INVALID_VALUE', data: { message: error.message } };

  const { dataValues, ...rest } = await Category.create({ name });

  return { status: 'CREATED', data: { name: dataValues.name, id: rest.null } };
};

const getAll = async () => {
  const categories = await Category.findAll();

  return { status: 'SUCCESSFUL', data: categories };
};

module.exports = {
  create,
  getAll,
};