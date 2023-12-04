DROP DATABASE IF EXISTS apoloStore_db;
CREATE DATABASE apoloStore_db;

USE apoloStore_db;

CREATE TABLE categories (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
INSERT INTO categories (name) VALUES ('Buzos'),('Remeras'), ('Pantalones');

CREATE TABLE colors (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
INSERT INTO categories (name) VALUES ('Azul'),('Rojo'), ('Verde'), ('Negro');


CREATE TABLE products (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category_id INT NOT NULL,
    colors_id INT NOT NULL,
    price INT NOT NULL,
    img VARCHAR, 
    description VARCHAR(255) NOT NULL
);
-- INSERT INTO products (name, category_id, price, description) VALUES ('Nombre de la prenda', id_categories, id_colors, 100, 'Descripción 1');