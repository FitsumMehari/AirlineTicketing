const express = require("express");
const router = express.Router();

const Employee = require("../models/employees");

//Getting all Employees

router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Getting one

router.get("/:id", getEmployee, (req, res) => {
  res.json(res.employee);
});

//Updating one

router.patch("/:id", getEmployee, async (req, res) => {
  if (req.body.name != null) {
    res.employee.name = req.body.name;
  }
  if (req.body.password != null) {
    res.employee.password = req.body.password;
  }

  try {
    const updatedEmployee = await res.employee.save();
    res.json(updatedEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Deleting one

router.delete("/:id", getEmployee, async (req, res) => {
  try {
    await res.employee.remove();
    res.json({ message: "Deleted employee " + res.employee.name });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Adding one

router.post("/", async (req, res) => {
  const employee = new Employee({
    name: req.body.name,
    password: req.body.password,
  });

  try {
    const newEmployee = await employee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

async function getEmployee(req, res, next) {
  let employee;
  try {
    employee = await Employee.findById(req.params.id);
    if (employee == null) {
      return res.status(404).json({ message: "Can not find employee" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  res.employee = employee;
  next();
}

module.exports = router;
