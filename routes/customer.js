const express = require("express");
const router = express.Router();

const {
  findAllCustomers,
  insertCustomers,
  updateCustomers,
  destroyCustomers,
} = require("../controller/customerController");

//  routes
router.get("/", findAllCustomers);
router.post("/", insertCustomers);
router.put("/:id", updateCustomers);
router.delete("/:id", destroyCustomers);

module.exports = router;
