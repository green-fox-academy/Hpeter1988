DROP DATABASE reddit;

CREATE DATABASE reddit;

use reddit;

CREATE TABLE users(
user_id INT NOT NULL AUTO_INCREMENT,
user_name VARCHAR(100) NOT NULL,
PRIMARY KEY(user_id)
);

CREATE TABLE posts(
post_id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(100) NOT NUll,
url VARCHAR(500) NOT NULL,
timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
score INT NOT NULL DEFAULT 0,
user_id INT NOT NULL,
FOREIGN KEY(user_id) references users(user_id),
PRIMARY KEY(post_id)
);

CREATE TABLE votes(
vote_id INT NOT NULL AUTO_INCREMENT,
user_id INT NOT NULL,
post_id INT NOT NULL,
vote INT NOT NULL,
FOREIGN KEY(user_id) references users(user_id),
FOREIGN KEY(post_id) references posts(post_id),
PRIMARY KEY(vote_id)
);