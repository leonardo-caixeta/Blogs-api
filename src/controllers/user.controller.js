const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const login = async (req, res) => {
  const { email, password } = req.body;

  const { status, data } = await userService.login(email, password);

  res.status(mapStatusHTTP(status)).json(data);
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { status, data } = await userService.createUser(displayName, email, password, image);

  res.status(mapStatusHTTP(status)).json(data);
};

const getAll = async (req, res) => {
  const { status, data } = await userService.getAll();

  return res.status(mapStatusHTTP(status)).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const { status, data } = await userService.getById(id);

  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  login,
  createUser,
  getAll,
  getById,
};