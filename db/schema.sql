DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burger (
    id INT AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);
