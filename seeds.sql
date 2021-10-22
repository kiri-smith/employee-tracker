--DROP DATABASE IF EXISTS tracker_db;
--CREATE DATABASE tracker_db;

USE tracker_db;

INSERT INTO deparment (id, name)
VALUES (001, English Language Arts),
(002, Mathematics),
(003, Science),
(004, Social Studies)
;

INSERT INTO role (id, title, salary, department_id)
VALUES (001, Department Head, 75000.00, 002),
(002, Teacher, 65000.00, 002),
(003, Teaching Assistant, 45000.00, 002),
;

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (222222, Mary, Brown, 001, 111111),
(333333, Tyrell, Hank, 002, 222222),
(444444, Summer, Simms, 002, 222222),
;