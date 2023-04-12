// CREATE DATABASE infoware;

// USE infoware;

// CREATE TABLE employees (
//   id INT PRIMARY KEY AUTO_INCREMENT,
//   name VARCHAR(255) NOT NULL,
//   email VARCHAR(255) NOT NULL,
//   position VARCHAR(255) NOT NULL
// );

// CREATE TABLE contact_details (
//   id INT PRIMARY KEY AUTO_INCREMENT,
//   employee_id INT NOT NULL,
//   contact_type VARCHAR(255) NOT NULL,
//   contact_info VARCHAR(255) NOT NULL,
//   FOREIGN KEY (employee_id) REFERENCES employees(id) ON DELETE CASCADE
// );
const express = require("express");
const app = express();
const port = 4000;
app.use(express.json({ limit: `100mb` }));
const util = require("util");

const mysql = require("mysql2");

const connection = require("./db");
const query = util.promisify(connection.query).bind(connection);
module.exports = connection.promise();

//     http://localhost:4000/
app.get("/api/", async (req, res) => {
  const rows = await query("SELECT * FROM employees");
  res.json(rows);
});

//   post ->     http://localhost:4000/employees/
app.post("/api/employee", async (req, res) => {
  const { name, email, position, contacts } = req.body;

  try {
    const result = connection.query(
      "INSERT INTO employees (name, email, position) VALUES (?, ?, ?)",
      [name, email, position]
    );

    const employeeId = result[0];
    console.log(result);
    for (const contact of contacts) {
      connection.query(
        "INSERT INTO contact_details (employee_id, contact_type, contact_info) VALUES (?, ?, ?)",
        [10, contact.contact_type, contact.contact_info]
      );
    }
    res.status(201).json({ message: "Employee created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//  put ->    http://localhost:4000/employees/{id}
app.put("/api/employee/:id", async (req, res) => {
  const id = req.params.id;
  const { name, email, position } = req.body;

  try {
    const result = connection.query(
      "UPDATE employees SET name = ?, email = ?, position = ? WHERE id = ?",
      [name, email, position, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({ message: "Employee updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//    delete ->      http://localhost:4000/employees/{id}
app.delete("/api/employee/:id", async (req, res) => {
  const id = req.params.id;

  try {
    // Delete employee from employees table
    const deleteEmployeeResult = connection.query(
      "DELETE FROM employees WHERE id = ?",
      [id]
    );
    console.log(id);

    if (deleteEmployeeResult.affectedRows === 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // Delete employee's contact details from contact_details table
    const deleteContactResult = connection.query(
      "DELETE FROM contact_details WHERE employee_id = ?",
      [id]
    );

    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//   get ->   http://localhost:4000/employees/{id}
app.get("/api/employee/:id", async (req, res) => {
  const id = req.params.id;

  try {
    // Get employee details from employees table
    const employeeResult = await query("SELECT * FROM employees WHERE id = ?", [
      id,
    ]);

    if (!employeeResult) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const contactResult = await query(
      "SELECT * FROM contact_details WHERE employee_id = ?",
      [id]
    );
    console.log(contactResult);
    const employee = {
      id: employeeResult[0].id,
      name: employeeResult[0].name,
      email: employeeResult[0].email,
      position: employeeResult[0].position,
      contacts: contactResult,
    };

    res.status(200).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
