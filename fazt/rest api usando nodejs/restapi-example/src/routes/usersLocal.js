const { Router } = require("express");
const _ = require("underscore");

const router = Router();

const users = require("../users.json");

router.get("/", (req, res) => {
  res.json(users);
});

router.post("/", (req, res) => {
  // console.log(req.body);
  const { name, username, email } = req.body;
  if (name && username && email) {
    const id = users.length + 1;
    const newUser = { ...req.body, id };
    users.push(newUser);
    res.json(users);
  } else {
    // res.json({ error: "There was an error" });
    res.status(500).json({ error: "There was an error" });
    // res.send('Wrong request');
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, username, email } = req.body;
  if (name && username && email) {
    _.each(users, (user, i) => {
      if (user.id == id) {
        user.name = name;
        user.username = username;
        user.email = email;
      }
    });
    res.json(users);
  } else {
    res.status(500).json({ error: "There was an error" });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  _.each(users, (user, i) => {
    if (user.id == id) {
      users.splice(i, 1);
    }
  });
  res.send(users);
});

module.exports = router;
