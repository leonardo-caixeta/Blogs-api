const Joi = require('joi');

const validLogin = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
}).messages({
  'any.required': '"Some required fields are missing"',
});

const validNewUser = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

module.exports = {
  validLogin,
  validNewUser,
};