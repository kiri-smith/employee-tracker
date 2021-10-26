const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const dbConnection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password",
        database: "tracker_db",
    }
);

dbConnection.connect(err => {
    if (err) {
        throw err
    }
    console.log('Connected to tracker_db')
    init();
});

const userOption = [
    {
        type: 'list',
        message: "Welcome! What would you like to do?",
        name: 'option',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'exit'],
        validate: (value) => { if (value) { return true } else { return 'Must choose an option to continue.' } }
    }
];

function init() {
    inquirer.prompt(userOption)
        .then((responses) => {
            switch (responses.option) {
                case "view all departments": viewDepartments(); break;
                case "view all roles": viewRoles(); break;
                case "view all employees": viewEmployees(); break;
                case "add a department": addDepartment(); break;
                case "add a role": addRole(); break;
                case "add an employee": addEmployee(); break;
                case "update an employee role": updateEmployee(); break;
                case "exit": dbConnection.end(); break;
            }
        })
}

function viewDepartments() {
    dbConnection.query(`SELECT * FROM department`, (err, res) => {
        if (err)
            throw err;
        console.table(res);
        init();
    })
}

function viewRoles() {
    dbConnection.query(`SELECT * FROM role`, (err, res) => {
        if (err)
            throw err;
        console.table(res);
        init();
    })
}

function viewEmployees() {
    dbConnection.query(`SELECT * FROM employee`, (err, res) => {
        if (err)
            throw err;
        console.table(res);
        init();
    })
}

function addDepartment() {
    inquirer.prompt(
        [
            {
                type: 'input',
                message: 'Please enter the name of the department you would like to add.',
                name: 'department',
                validate: (value) => { if (value) { return true } else { return 'Must enter a department name to continue.' } }
            }
        ]
    )
        .then((responses) => {
            dbConnection.query("INSERT INTO department SET ?",
                { name: responses.department }, (err, res) => {
                    if (err)
                        throw err;
                    console.log("You successfully added a new department.")
                    init();
                })
        })
}

function addRole() {
    inquirer.prompt(
        [
            {
                type: 'input',
                message: 'Please enter the name of the role you would like to add.',
                name: 'role',
                validate: (value) => { if (value) { return true } else { return 'Must enter a role name to continue.' } }
            },
            {
                type: 'input',
                message: 'Please enter the salary for the role you would like to add.',
                name: 'roleSalary',
                validate: (value) => { if (value) { return true } else { return 'Must enter a salary to continue.' } }
            },
            {
                type: 'input',
                message: 'Please enter the department ID for the role you would like to add.',
                name: 'roleDepartment',
                validate: (value) => { if (value) { return true } else { return 'Must enter a department to continue.' } }
            }
        ]
    )
        .then((responses) => {
            dbConnection.query("INSERT INTO role SET ?",
                { title: responses.role, salary: parseInt(responses.roleSalary), department_id: parseInt(responses.roleDepartment) }, (err, res) => {
                    if (err)
                        throw err;
                    console.log("You successfully added a new role.")
                    init();
                });
        })
}

function addEmployee() {
    inquirer.prompt(
        [
            {
                type: 'input',
                message: 'Please enter the first name of the employee you would like to add.',
                name: 'firstName',
                validate: (value) => { if (value) { return true } else { return 'Must enter a first name to continue.' } }
            },
            {
                type: 'input',
                message: 'Please enter the last name of the employee you would like to add.',
                name: 'lastName',
                validate: (value) => { if (value) { return true } else { return 'Must enter a last name to continue.' } }
            },
            {
                type: 'input',
                message: 'Please enter the role ID of the employee you would like to add.',
                name: 'employeeRole',
                validate: (value) => { if (value) { return true } else { return 'Must enter the role to continue.' } }
            },
            {
                type: 'input',
                message: 'Please enter the manager ID of this new employee.',
                name: 'manager',
                validate: (value) => { if (value) { return true } else { return 'Must enter a manager to continue.' } }
            },
        ]
    )
        .then((responses) => {
            dbConnection.query("INSERT INTO employee SET ?",
                { first_name: responses.firstName, last_name: responses.lastName, employee_role_id: parseInt(responses.employeeRole), manager_id: parseInt(responses.manager) }, (err, res) => {
                    if (err)
                        throw err;
                    console.log("You successfully added a new employee.")
                    init();
                });
        })
}


function updateEmployee() {
    dbConnection.query(`SELECT employee_id, first_name, last_name FROM employee`, (err, res) => {
        if (err)
            throw err;
        inquirer.prompt(
            [
                {
                    type: 'input',
                    message: 'Enter the ID of the employee you would like to update.',
                    name: 'employeeId',
                    validate: (value) => { if (value) { return true } else { return 'Must enter an employee ID to continue.' } }
                },

                {
                    type: 'input',
                    message: 'Enter the new Role ID for this employee.',
                    name: 'newRoleId',
                    validate: (value) => { if (value) { return true } else { return 'Must enter a department ID to continue.' } }
                },
            ])
            .then(responses => {
                let updateEmployee = parseInt(responses.employeeId);
                let newRoleId = parseInt(responses.newRoleId);
                dbConnection.query(`UPDATE employee SET employee_role_id = ${newRoleId} WHERE employee_id = ${updateEmployee}`, (err, res) => {
                    if (err)
                        throw err;
                    console.log("Employee has been successfully updated.")
                    init();
                })
            })
    })
}