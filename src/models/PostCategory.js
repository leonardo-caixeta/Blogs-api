module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: { type: DataTypes.INTEGER, primaryKey: true },
    categoryId: { type: DataTypes.INTEGER, primaryKey: true },
  },
  {
    timestamps: false,
    underscored: true,
  }
);

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, { through: 'PostCategory', foreignKey: 'postId' });
    models.BlogPost.belongsToMany(models.Category, { through: 'PostCategory', foreignKey: 'categoryId' });
  };

  return PostCategory;
};