require("dotenv").config();
let express = require("express");
let app = express();
const cors = require("cors");

let home = require("./controllers/homescontroller");
let user = require("./controllers/usercontroller");
let story = require("./controllers/storiescontroller");
let sequelize = require("./db");

// sequelize.sync({ force: true });
sequelize.sync();

app.use(express.json());
app.use(require("./middleware/headers"));

app.use("/user", user);
app.use(cors());

app.use(require("./middleware/validate-session"));
app.use("/homes", home);
app.use("/stories", story);

app.listen(process.env.PORT, function () {
  console.log(`App is listening on ${process.env.PORT}`);
});
