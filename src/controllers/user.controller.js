const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const login = async (req, res) => {
  const { email, password } = req.body;

  const { status, data } = await userService.login(email, password);

  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  login,
};