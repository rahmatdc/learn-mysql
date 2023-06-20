const { purchasing } = require("../models");

class Purchasing {
  async findAllPurchasing(req, res, next) {
    try {
      const data = await purchasing.findAll();
      res.status(200).json({ message: "Finded", data: data });
    } catch (error) {
      console.log(error.data);
      res.status(500).json({ message: "Books Not Found", statuscode: 404 });
    }
  }
  async purchasingBooks(req, res, next) {
    try {
      const data = await purchasing.create({
        name: req.body.name,
        title: req.body.name,
      });
      res.status(201).json({ message: "Thank you for your purchase!" });
    } catch (error) {
      res.status(500).json({ message: "Error Purchasing!" });
    }
  }
}

module.exports = new Purchasing();
