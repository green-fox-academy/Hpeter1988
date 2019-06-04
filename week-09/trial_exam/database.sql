
CREATE DATABASE exam;

use exam;

CREATE TABLE `Exam` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`url` VARCHAR(100),
	`alias` VARCHAR(100),
	`hitCount` INT DEFAULT '0',
	`secretCode` INT,
	PRIMARY KEY (`id`)
);
