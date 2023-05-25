const { customer } = require("../models");

class Customer {
  async findAllCustomers(req, res, next) {
    try {
      const data = await customer.findAll();
      res.status(201).json({ code: 201, data: data });
      console.log("Kutu Loncat Bangsat");
    } catch (error) {
      console.log("error-->", error.data);
      res.status(500).json({ error: error.data });
    }
  }
}

module.exports = new Customer();
