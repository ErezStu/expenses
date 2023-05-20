const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const expensesRoutes = require("./routes/expensesRoutes.js");
const usersRoutes = require("./routes/usersRoutes.js");

const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/expenses", expensesRoutes);
app.use("/api/users", usersRoutes);

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("Connecting to the Mongo");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(PORT, () => console.log("The server runs!"));
