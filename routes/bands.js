const router = require("express").Router();
const bandController = require("../controllers/bandController");

// Matches with "/api/books"
router.route("/")
  .get(bandController.findAll)
  .post(bandController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(bandController.findById)
  .put(bandController.update)
  .delete(bandController.remove);

module.exports = router;
