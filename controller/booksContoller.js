const { books } = require("../models");

class Books {
  async findAllBooks(req, res, next) {
    try {
      const data = await books.findAll();
      res.status(200).json({ message: "Finded" });
    } catch (error) {
      res.status(500).json({ message: "Books Not Found", statuscode: 404 });
    }
  }
  async insertBooks(req, res, next) {
    try {
      const data = await books.create({
        title: req.body.name,
        author: req.body.name,
      });
    } catch (error) {
      res.status(500).json({ message: "Error Added" });
    }
  }
  async updateBooks(req, res, next) {
    try {
      const data = await books.update({
        name: req.body.name,
        author: req.body.name,
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({ message: "Updated" });
    } catch (error) {
      res.status(500).json({ message: "Error Updated" });
    }
  }
  async destroyBooks(req, res, next) {
    try {
      const data = await books.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({ message: "Deleted" });
    } catch (error) {
      res.status(500).json({ message: "Error Deleted" });
    }
  }
}

module.exports = new Books();
