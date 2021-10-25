const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const Connection = require('mysql2/typings/mysql/lib/Connection');

const dbConnection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password",
        database: "tracker_db"
    }
);

dbConnection(err => {
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
];

const updateEmployee = [
    {
        type: 'list',
        message: 'Choose the employee you would like to update.',
        name: 'role-update',
        choices: [''], //needs link to emps here
        validate: (value) => { if (value) { return true } else { return 'Must choose an employee to continue.' } }
    }
]

function init() {
    inquirer.prompt(userOption)
        .then((responses) => {
            if (responses.option === "view all departments") {
                //need
            } else if (responses.option = "view all roles") {
                //need
            } else if (responses.option = "view all employees") {
                //need
            } else if (responses.option = "add a department") {
                inquirer.prompt(newDepartment)
                    .then((responses) => {
                        dbConnection.query("INSERT INTO department SET ?", { name: responses.department }, (err, res) => {
                            if (err)
                                throw err;
                            console.log("You successfully added a new department!")
                            init();
                        })
                    })
            } else if (responses.option = "add a role") {
                inquirer.prompt(newRole)
                    .then((responses) => {
                        //need   
                    })
            } else if (responses.option = "add an employee") {
                inquirer.prompt(newEmployee)
                    .then((responses) => {
                        //need  
                    })

            } else if (responses.option = "update an employee role") {
                inquirer.prompt(updateEmployee)
                    .then((responses) => {
                        //need   
                    })
            } else {
                init();
            }
        })
};



inquirer.prompt(whichEmployee)
    .then((responses) => {

        //if they answer yes, prompt manager questions
        if (responses.role === 'Manager') {
            inquirer.prompt(managerQuestions)
                .then((responses) => {
                    const addedManager = new Manager(responses.managerName, responses.managerIdNumber, responses.managerEmail, responses.office);
                    newManager.push(addedManager);
                    addTeam();
                })
        }
    }
    );