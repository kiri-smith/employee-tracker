const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const userOptions = [
    {
        type: 'list',
        message: "Welcome! What would you like to do?",
        name: 'options',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
        validate: (value) => { if (value) { return true } else { return 'Must choose an option to continue.' } }
    }
];

const newDepartment = [
    {
        type: 'input',
        message: 'Please enter the name of the department you would like to add.',
        name: 'department',
        validate: (value) => { if (value) { return true } else { return 'Must enter a department name to continue.' } }
    }
];

const newRole = [
    {
        type: 'input',
        message: 'Please enter the name of the role you would like to add.',
        name: 'role',
        validate: (value) => { if (value) { return true } else { return 'Must enter a role name to continue.' } }
    },
    {
        type: 'input',
        message: 'Please enter the salary for the role you would like to add.',
        name: 'role-salary',
        validate: (value) => { if (value) { return true } else { return 'Must enter a salary to continue.' } }
    },
    {
        type: 'input',
        message: 'Please enter the department for the role you would like to add.',
        name: 'role-department',
        validate: (value) => { if (value) { return true } else { return 'Must enter a department to continue.' } }
    }
];

const newEmployee = [
    {
        type: 'input',
        message: 'Please enter the first name of the employee you would like to add.',
        name: 'first-name',
        validate: (value) => { if (value) { return true } else { return 'Must enter a first name to continue.' } }
    },
    {
        type: 'input',
        message: 'Please enter the last name of the employee you would like to add.',
        name: 'last-name',
        validate: (value) => { if (value) { return true } else { return 'Must enter a last name to continue.' } }
    },
    {
        type: 'input',
        message: 'Please enter the role of the employee you would like to add.',
        name: 'employee-role',
        validate: (value) => { if (value) { return true } else { return 'Must enter the role to continue.' } }
    },
    {
        type: 'input',
        message: 'Please enter the manager of this new employee.',
        name: 'manager',
        validate: (value) => { if (value) { return true } else { return 'Must enter a manager to continue.' } }
    },
]