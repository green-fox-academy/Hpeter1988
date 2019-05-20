CREATE DATABASE Todo;

USE Todo;

CREATE TABLE Persons (
  Person_ID INT AUTO_INCREMENT,
  First_Name VARCHAR (50),
  Last_Name VARCHAR (50),
   PRIMARY KEY(Person_ID)
);


CREATE TABLE Tasks (
  Task_ID INT AUTO_INCREMENT,
  Task_Name VARCHAR (100),
  PRIMARY KEY (Task_ID)
);

CREATE TABLE Done (
  Task_ID INT,
  Person_ID INT,
  FOREIGN KEY (Person_ID) REFERENCES Persons(Person_ID),
  FOREIGN KEY (Task_ID) REFERENCES Tasks(Task_ID)
);
INSERT INTO Persons (First_Name , Last_Name) VALUES ('Péter', 'Harasztia' ), ('Józsi', 'Horváth'), ('Béla', 'Kovács');
INSERT INTO Tasks (Task_Name ) VALUES ('Buy Milk'), ('Walk Dog'), ('Get Bananas from a tree');

INSERT INTO Done (Person_ID, Task_ID) VALUES (1, 1), (2, 2 ), (3, 3);

SELECT First_Name, Task_Name  FROM Persons
INNER JOIN Done
ON Persons.Person_ID = Done.Person_ID
INNER JOIN Tasks
ON Tasks.Task_ID = Done.Task_ID;


