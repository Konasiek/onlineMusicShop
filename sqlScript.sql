/*SQL script for onlineMusicShop*/
CREATE SCHEMA `ms`;
/*ROLE_USER has to be added to db to create new users*/
INSERT INTO roles values (131, "ROLE_USER");

INSERT INTO users values (111, "user12@gmail.com", "password", "useruser");
SELECT * FROM users;

SELECT * FROM roles;
SELECT * FROM user_roles;

DROP table roles, users, user_roles;

