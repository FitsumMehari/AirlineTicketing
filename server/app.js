const cors = require("cors");

const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/airlineticketing", {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error(error);
});

db.once("open", () => {
  console.log("Connected to databse");
});

app.use(cors());
app.use(express.json());

const employeesRoutes = require("./routes/employees");

app.use("/employees", employeesRoutes);

app.listen(3000, () => {
  console.log("Server listening on port: " + 3000);
});
