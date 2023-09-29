module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
  }
);

  return category;
};