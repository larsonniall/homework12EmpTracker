USE employeeDB;

INSERT INTO department(name) VALUES(?);
INSERT INTO role(title, salary, department_id) VALUES(?, ?, ?);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES(?, ?, ?, ?);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

UPDATE employee SET role_id = ? WHERE employee(id) = ?;