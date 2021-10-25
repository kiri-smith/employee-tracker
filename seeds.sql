--DROP DATABASE IF EXISTS tracker_db;
--CREATE DATABASE tracker_db;

USE tracker_db;

INSERT INTO deparment (name)
VALUES ("English Language Arts"),
("Mathematics"),
("Science"),
("Social Studies")
;

INSERT INTO role (title, salary, department_id)
VALUES ("Department Head", 75000, 1),
("Teacher", 65000, 1),
("Teaching Assistant", 45000, 1),
("Department Head", 75000, 2),
("Teacher", 65000, 2),
("Teaching Assistant", 45000, 2),
("Department Head", 75000, 3),
("Teacher", 65000, 3),
("Teaching Assistant", 45000, 3),
("Department Head", 75000, 4),
("Teacher", 65000, 4),
("Teaching Assistant", 45000, 4),
("Department Head", 75000, 5),
("Teacher", 65000, 5),
("Teaching Assistant", 45000, 5),
("Department Head", 75000, 6),
("Teacher", 65000, 6),
("Teaching Assistant", 45000, 6),
;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mary", "Brown", 1, null),
("Bob", "White", 2, 1),
("Tyrell", "Green", 2, 1),
("Sue", "Black", 3, 1),
("Jay", "Red", 1, null),
("Gisele", "Orange", 2, 2),
("Omar", "Violet", 2, 2),
("Phineas", "Purple", 3, 2),
("Parker", "Pink", 1, null),
("Sam", "Tan", 2, 3),
("Lillie", "Gray", 2, 3),
("Griselda", "Yellow", 3, 3),

;