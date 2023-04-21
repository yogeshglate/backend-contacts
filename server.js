const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

//Applying Middlewares
app.use(express.json()); // For request body parser
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler); // For Error Handling

app.listen(port, () => {
  console.log("Server running on PORT : ", port);
});
