const Joi = require('joi');

const validLogin = Joi.object({
  email: Joi.string().required(),
  password: Joi.number().required(),
}).messages({
  'any.required': '"Some required fields are missing"',
});

module.exports = {
  validLogin,
};