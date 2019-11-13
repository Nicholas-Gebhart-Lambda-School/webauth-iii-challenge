const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../users/users-model");
const { validateUser } = require("../users/users-helpers");

router.post("/register", (req, res) => {
  const user = req.body;
  const result = validateUser(user);

  if (result.isSuccessful) {
    const hash = bcrypt.hashSync(user.password, 14);
    user.password = hash;
    Users.add(user)
      .then(user => {
        const { id, username } = user;
        res.status(200).json({ id, username });
      })
      .catch(() => {
        res.status(500).json({ message: "error" });
      });
  } else {
    res.status(400).json({
      message: "you have goofed",
      error: result.errors
    });
  }
});

module.exports = router;
