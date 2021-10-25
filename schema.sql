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
    PRIMARY KEY (id),    
    FOREIGN KEY (id)
    REFERENCES deparment(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    employee_id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (id)
    REFERENCES role(id)
    ON DELETE SET NULL
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL
);