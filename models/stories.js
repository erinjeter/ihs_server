module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define("story", {
    story: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
  });
  return Story;
};
