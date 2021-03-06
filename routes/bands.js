const router = require("express").Router();
const bandController = require("../controllers/bandController");

// Matches with "/api/books"
router.route("/artists")
  .get(bandController.findAll)
  .post(bandController.create)

  router.route("/artists/:artist")
  .get(bandController.searchBand);

router
  .route("/artist/:id")
  .get(bandController.findById)
  .put(bandController.update)
  .delete(bandController.removeBand);

  router
  .route("/user/artists/:userid")
  .get(bandController.findByUserId);

  router
  .route("/user/edit/:id")
  .put(bandController.editUser)
  .delete(bandController.removeUser);

  router
  .route("/genres/:genre")
  .get(bandController.searchGenre);

  router
  .route("/user/following/:id")
  .put(bandController.followBand);

module.exports = router;
