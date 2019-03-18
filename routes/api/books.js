const router = require("express").Router();
const booksController = require("../../controllers/booksController");

//module.exports = function() {
router.route("/").post(booksController.saveBooks);
//};
module.exports = router;
// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);
