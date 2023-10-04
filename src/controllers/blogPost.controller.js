const { blogPostService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

// const create = async (req, res) => {
//   const { status, data } = await blogPostService.create(req.body);

//   res.status(status).json(data);
// };

const getAll = async (req, res) => {
  const { status, data } = await blogPostService.getAll();

  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  // create,
  getAll,
};