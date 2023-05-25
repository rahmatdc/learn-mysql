require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
}); // Config environment
const express = require("express"); // Import express
const app = express(); // Make express app
/* Import routes */
const customerRouter = require("./routes/customer");
const booksRouter = require("./routes/books");
/* Import errorHandler */
//   const errorHandler = require("./middlewares/errorHandler");
/* Enables req.body */
app.use(express.json()); // Enables req.body (JSON)
// Enables req.body (url-encoded)
app.use(
  express.urlencoded({
    extended: true,
  })
);
/* Use the routes */
app.use("/customers", customerRouter);
app.use("/books", booksRouter);
/* If route not found */
app.all("*", (req, res, next) => {
  try {
    next({ message: "Endpoint not found", statusCode: 404 });
  } catch (error) {
    next(error);
  }
});
/* Use error handler */
//   app.use(errorHandler);
/* Run the server */
app.listen(4000, () => console.log(`Server running on 4000`));
