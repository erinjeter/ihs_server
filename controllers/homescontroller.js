let express = require("express");
let router = express.Router();
let validateSession = require("../middleware/validate-session");
const Home = require("../db").import("../models/homes");

router.get("/practice", validateSession, function (req, res) {
  res.send("practice route");
});

router.post("/create", validateSession, (req, res) => {
  const homeEntry = {
    homestreet1: req.body.homestreet1,
    homestreet2: req.body.homestreet2,
    homecity: req.body.homecity,
    homestate: req.body.homestate,
    homezip: req.body.homezip,
    homeType: req.body.homeType,
    photo: req.body.photo,
    yearBuilt: req.body.yearBuilt,
    description: req.body.description,
    userId: req.user.id,
  };
  Home.create(homeEntry)
    .then((home) => res.status(200).json(home))
    .catch((err) => res.status(500).json({ error: err }));
});

router.get("/", (req, res) => {
  Home.findAll()
    .then((homes) => res.status(200).json(homes))
    .catch((err) => res.status(500).json({ error: err }));
});

router.put("/update/:entryId", validateSession, function (req, res) {
  const updateHomeEntry = {
    homestreet1: req.body.homes.homestreet1,
    homestreet2: req.body.homes.homestreet2,
    homecity: req.body.homes.homecity,
    homestate: req.body.homes.homestate,
    homezip: req.body.homes.homezip,
    homeType: req.body.homes.homeType,
    photo: req.body.homes.photo,
    yearBuilt: req.body.homes.yearBuilt,
    description: req.body.homes.description,
  };

  const query = { where: { id: req.params.entryId } };

  Home.update(updateHomeEntry, query)
    .then((homes) => res.status(200).json(homes))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;

router.delete("/delete/:id", validateSession, function (req, res) {
  const query = { where: { id: req.params.id } };

  Home.destroy(query)
    .then(() => res.status(200).json({ message: "Home Removed" }))
    .catch((err) => res.status(500).json({ error: err }));
});
