const { Router } = require("express");

const router = new Router();

//* this router is a minified app that is itself a listener
router.get("/", (req, res) => {
  res.render("index", { pageTitle: "وبلاگ" });
});

module.exports = router;
