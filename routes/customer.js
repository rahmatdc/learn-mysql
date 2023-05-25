const express = require("express");
const router = express.Router();

const { findAllCustomers } = require("../controller/customerController");

//  routes
router.get("/", findAllCustomers);
router.put("/");

module.exports = router;
