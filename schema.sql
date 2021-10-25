DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE deparment (
    id INT NOT NULL AUTO_INCREMENT ,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id),
);

CREATE TABLE role (
    role_id INT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    PRIMARY KEY (role_id),    
    FOREIGN KEY (department_id)
    REFERENCES deparment(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    employee_id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    employee_role_id INT,
    manager_id INT,
    PRIMARY KEY (employee_id),
    FOREIGN KEY (employee_role_id)
    REFERENCES role(role_id)
    ON DELETE SET NULL
    FOREIGN KEY (manager_id)
    REFERENCES employee(employee_id)
    ON DELETE SET NULL
);