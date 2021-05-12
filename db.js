const Sequelize = require("sequelize");
const sequelize = new Sequelize("ihs_project", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

sequelize.authenticate().then(
  function () {
    console.log("Connected to ihs_project postgres database");
  },
  function (err) {
    console.log(err);
  }
);

User = sequelize.import("./models/user");
Home = sequelize.import("./models/homes");
Story = sequelize.import("./models/stories");

User.hasMany(Home);
Home.belongsTo(User);

User.hasMany(Story);
Story.belongsTo(User);

module.exports = sequelize;
