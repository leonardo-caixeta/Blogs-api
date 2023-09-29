const httpErrorMap = {
  SUCCESSFUL: 200,
  CREATED: 201,
  DELETED: 204,
  REQUIRED_VALUE: 400,
  INVALID_VALUE: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_VALUE: 422,
};

const mapStatusHTTP = (status) => httpErrorMap[status] || 500;

module.exports = mapStatusHTTP;