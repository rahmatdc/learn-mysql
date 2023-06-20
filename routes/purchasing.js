const express = require("express");
const {
  purchasingBooks,
  findAllPurchasing,
} = require("../controller/purchasingController");
const router = express.Router();

router.get("/", findAllPurchasing);
router.post("/", purchasingBooks);

module.exports = router;
