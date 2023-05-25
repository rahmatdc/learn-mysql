const { customer } = require("../models");

class Customer {
  async findAllCustomers(req, res, next) {
    try {
      const data = await customer.findAll();
      res.status(200).json({ code: 201, data: data });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Costumer Not Found", statusCode: error.data });
    }
  }
  async insertCustomers(req, res, next) {
    try {
      const data = await customer.create({ name: req.body.name });
      res.status(201).json({ message: "Added" });
    } catch (error) {
      res.status(500).json({ message: "Error Adding" });
    }
  }
  async updateCustomers(req, res, next) {
    try {
      const data = await customer.update(
        { name: req.body.name },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json({ message: "Updated" });
    } catch (error) {
      res.status(500).json({ message: "Error Update" });
    }
  }
  async destroyCustomers(req, res, next) {
    try {
      const data = await customer.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({ message: "Deleted" });
    } catch (error) {
      res.status(500).json({ message: "Error Delete" });
    }
  }
}

module.exports = new Customer();
