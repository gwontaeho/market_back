module.exports = (sequelize, DataTypes) => {
  return sequelize.define("comment", {
    comment: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    answer: {
      type: DataTypes.STRING(100),
    },
  });
};
