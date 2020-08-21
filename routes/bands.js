const router = require("express").Router();
const bandController = require("../controllers/bandController");

// Matches with "/api/books"
router.route("/artists")
  .get(bandController.findAll)
  .post(bandController.create);

// Matches with "/api/books/:id"
router
  .route("/artist/:id")
  .get(bandController.findById)
  .put(bandController.update)
  .delete(bandController.remove);

  router
  .route("/user/artists/:userid")
  .get(bandController.findByUserId);
module.exports = router;
