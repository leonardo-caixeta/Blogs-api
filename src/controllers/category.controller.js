const { categoryService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const createUser = async (req, res) => {
  const { name } = req.body;

  const { status, data } = await categoryService
    .createCategory(name);

  res.status(mapStatusHTTP(status)).json(data);
};

const getAll = async (req, res) => {
  const { status, data } = await categoryService.getAll();

  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  createUser,
  getAll,
};