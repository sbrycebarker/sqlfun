DROP TABLE IF EXISTS vehicles;

CREATE TABLE IF NOT EXISTS vehicles (
  id int NOT NULL AUTO_INCREMENT ,
  make varchar(255) NOT NULL,
  model varchar(255) NOT NULL,
  year int
  owner_id int NOT NULL,
);

INSERT INTO Vehicles (make, model, year, owner_id)
VALUES
('Toyota', 'Camry', 1991, 1),
('Honda', 'Civic', 1995, 1),
('Ford', 'Focus', 2005, 1),
('Ford', 'Taurus', 2003, 2),
('VW', 'Bug', 2010, 2),
('Mini', 'Cooper', 2013, 3);
