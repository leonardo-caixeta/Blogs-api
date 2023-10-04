// const { Sequelize } = require('sequelize');

// const config = require('../config/config');
// const { validNewBlogPost } = require('./validations/schemas');
const { BlogPost, User, Category } = require('../models');

// const sequelize = new Sequelize(config[process.env.NODE_ENV]);

// const create = async ({ title, content, categoryIds }) => {
//   const { error } = validNewBlogPost.validate(title, content, categoryIds);

//   if (error) return { status: 'REQUIRED_VALUE', data: { message: error.message } };

//   const transaction = await sequelize.transaction(async (t) => {

//   });

//   return { status: 'SUCCESSFUL', data: 'nada' };
// };

const getAll = async () => {
  const blogPosts = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
    }],
  });

  console.log(blogPosts);

  return { status: 'SUCCESSFUL', data: blogPosts };
};

module.exports = {
  // create,
  getAll,
};