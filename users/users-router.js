const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("<h3>Users Router</h3>");
});

module.exports = router;
