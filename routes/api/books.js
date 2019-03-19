const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/").post(booksController.saveBooks);
router.route("/").get(booksController.findSaved);

module.exports = router;
// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);
