const router = require("express").Router();
const booksController = require("../controllers/bookController");

router.get("/books", booksController.findAll);
router.post("/books", booksController.saveBook);
router.delete("/book/:id", booksController.deleteBook);

module.exports = router;
