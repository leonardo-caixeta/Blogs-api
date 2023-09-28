'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      postId: {
        type: Sequelize.INTEGER,
        field: 'post_id',
        references: {
          model: 'blog_posts',
          key: 'id'
        },
        primarykey: true,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        field: 'category_id',
        references: {
          model: 'categories',
          key: 'id'
        },
        primarykey: true,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  }
};
