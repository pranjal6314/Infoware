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
