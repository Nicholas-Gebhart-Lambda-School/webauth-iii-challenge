const router = require("express").Router();

const Users = require("./users-model");
const middleware = require("../auth/auth-middleware");

router.get("/", middleware, (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(() => res.status(500).json({ message: "server error" }));
});

module.exports = router;
