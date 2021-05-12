let express = require("express");
let router = express.Router();
let validateSession = require("../middleware/validate-session");
const Story = require("../db").import("../models/stories");

router.get("/stories", validateSession, function (req, res) {
  res.send("story route");
});

router.post("/create", validateSession, (req, res) => {
  const storyEntry = {
    story: req.body.story,
    userId: req.user.id,
  };
  Story.create(storyEntry)
    .then((story) => res.status(200).json(story))
    .catch((err) => res.status(500).json({ error: err }));
});

router.get("/", validateSession, (req, res) => {
  Story.findAll()
    .then((stories) => res.status(200).json(stories))
    .catch((err) => res.status(500).json({ error: err }));
});

router.put("/update/:entryId", validateSession, function (req, res) {
  const updateStoryEntry = {
    story: req.body.story.story,
  };

  const query = { where: { id: req.params.entryId } };

  Story.update(updateStoryEntry, query)
    .then((story) => res.status(200).json(story))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;

router.delete("/delete/:id", validateSession, function (req, res) {
  const query = { where: { id: req.params.id } };

  Story.destroy(query)
    .then(() => res.status(200).json({ message: "Story Removed" }))
    .catch((err) => res.status(500).json({ error: err }));
});
