// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();

// mongoose.connect("mongodb://localhost/airlineticketing", {
//   useNewUrlParser: true,
// });

// const db = mongoose.connection;

// db.on("error", (error) => {
//   console.error(error);
// });

// db.once("open", () => {
//   console.log("Connected to database");
// });

// app.use(express.json());

// const employeesRoutes = require("./routes/employees");

// app.use("/employees", employeesRoutes);

// app.listen(3000, () => {
//   console.log("server running on port " + 3000);
// });

const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost/airlineticketing", {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error(error);
});

db.once("open", () => {
  console.log("Connected to databse");
});

app.use(express.json());

const employeesRoutes = require("./routes/employees");

app.use("/employees", employeesRoutes);

app.listen(3000, () => {
  console.log("Server listening on port: " + 3000);
});
