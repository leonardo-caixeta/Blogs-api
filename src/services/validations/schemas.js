const Joi = require('joi');

const validLogin = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
}).messages({
  'string.empty': 'Some required fields are missing',
});

const validNewUser = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

const validNewCategory = Joi.object({
  name: Joi.string().required(),
});

const validNewBlogPost = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().required(),
}).messages({
  'string.required': 'Some required fields are missing',
});

module.exports = {
  validLogin,
  validNewUser,
  validNewCategory,
  validNewBlogPost,
};