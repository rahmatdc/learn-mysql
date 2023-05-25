const express = require("express");
const {
  findAllBooks,
  insertBooks,
  updateBooks,
  destroyBooks,
} = require("../controller/booksContoller");
const router = express.Router();

router.get("/", findAllBooks);
router.post("/", insertBooks);
router.put("/", updateBooks);
router.delete("/", destroyBooks);

module.exports = router;
