module.exports = (sequelize, DataTypes) => {
  const Home = sequelize.define("home", {
    homestreet1: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    homestreet2: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    homecity: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    homestate: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    homezip: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    homeType: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    yearBuilt: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
  });

  return Home;
};
