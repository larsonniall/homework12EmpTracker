const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employeeDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});


function runSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "rawlist",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "View Employees By Department",
          "View Employees By Role",
          "Add Employee",
          "Add Department",
          "Add Role",
          "Update Employee Role",
        ]
      })
    
      .then(function(answer) {
        switch (answer.action) {
        case "View All Employees":
          allEmployees();
          break;
  
        case "View Employees By Department":
          employeesByDepartment();
          break;
  
        case "View Employees By Role":
          employeesByRole();
          break;
  
        case "Add Employee":
          addEmployee();
          break;
  
        case "Add Department":
          addDepartment();
          break;
  
        case "Add Role":
          addRole();
          break;
  
        case "Update Employee Role":
          updateEmployee();
          break;
  
        }
      });
  }
  
  function allEmployees() {
      
        var query = "SELECT * FROM info";
        connection.query(query, function(err, res) {
        console.table(res);
   
          runSearch();
        });
  }
  
  function employeesByDepartment() {
    
    var query = "SELECT * FROM info GROUP BY department_id";
    connection.query(query, function(err, res) {
    console.table(res);
      
      runSearch();
    });
  }
  
    function employeesByRole() {
      
      var query = "SELECT * FROM info GROUP BY role_id";
      connection.query(query, function(err, res) {
      console.table(res);
        
        runSearch();
      });
  }
  
  function addEmployee() {
    inquirer
      .prompt(responseEmployee)
      .then(function (input) {
        const employee = new employee (input.firstName, input.lastName, input.role, input.manager)
        
  
        runSearch();
      });
  }
  
  function addDepartment() {
    inquirer
      .prompt(responseDepartment)
      .then(function (input) {
        const department = new department (input.firstName, input.lastName, input.role, input.manager)
        
  
        runSearch();
      });
  }
  
  function addRole() {
    inquirer
      .prompt(responseRole)
      .then(function (input) {
        const role = new role (input.firstName, input.lastName, input.role, input.manager)
        
  
        runSearch();
      });
  }
  
  const responseEmployee = [
    {
      type: "input",
      message: "What is the employee's first name?",
      name: "first name"
    },
    {
      type: "input",
      message: "What is the employee's last name?",
      name: "last name"
    },
    {
      type: "input",
      message: "What is the employee's role?",
      name: "role"
    },
    {
      type: "input",
      message: "Who is the employee's manager?",
      name: "manager"
    }
  ];
  
  const responseDepartment = [
    {
      type: "input",
      message: "What is the department name?",
      name: "name"
    }
  ];
  
  const responseRole = [
    {
      type: "input",
      message: "What is the role's title?",
      name: "title"
    },
    {
      type: "input",
      message: "What is the salary?",
      name: "salary"
    },
    {
      type: "input",
      message: "What is the department?",
      name: "department"
    },
  ];
