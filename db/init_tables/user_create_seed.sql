DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE IF NOT EXISTS users (
  id int NOT NULL AUTO_INCREMENT ,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL
  PRIMARY KEY (ID)
);

INSERT INTO Persons (User, email)
VALUES
('John Smith', 'john@smith.com'),
('Dave Davis', 'dave@davis.com'),
('Jane Janis', 'jane@janis.com');
