CREATE DATABASE guardians_of_the_globe;

use guardians_of_the_globe;

CREATE TABLE heroes(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    nickname VARCHAR(100),
    age VARCHAR(20),
    powers varchar(250),
    abilities varchar(250),
    gender varchar(50),
    specie varchar (50),
    allies varchar(250),
    enemies varchar(250),
    image varchar(250)
);

CREATE TABLE villains(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    nickname VARCHAR(100),
    gender varchar(50),
    powers varchar(250),
    abilities varchar(250),
    specie varchar (50),
    allies varchar(250),
    enemies varchar(250)
);

INSERT INTO heroes (name, nickname, age, powers, abilities, gender, specie, allies, enemies, image) VALUES ('Rudolph Conners', 'Robot (alter-ego), Rudy', 'Adulto', 'Robotic Manipulation', 'High Intelligence, Engineering and Robotics Expertise, Tactical Expertise, Linguistics', 'Male', 'Human', 'Invincible, Atom Eve, Rex Splode, Dupli-Kate, Cecil Stedman, Monster Girl, Shrinking Rae, Black Samson', 'Flaxans, Battle Beast, Kursk, Furnace, Magmaniac, Machine Head, Tether Tyrant, Mauler Twins', 'https://cdn.glitch.global/a65e23b0-2def-47ca-b838-c29d3d561b80/robot.png?v=1681257727746'); 
INSERT INTO heroes (name, nickname, age, powers, abilities, gender, specie, allies, enemies, image) VALUES ('Markus Grimshaw', 'Black Samson (alter ego)', 'Adulto', 'N/A', 'Superhuman Strength', 'Male', 'Human', 'Invincible, Robot, Rex Splode, Monster Girl, Shrinking Rae, Dupli-Kate, Cecil Stedman', 'Battle Beast, Machine Head, Isotope, Magmaniac, Furnace, Kursk, Tether Tyrant, Omni-Man', 'https://cdn.glitch.global/a65e23b0-2def-47ca-b838-c29d3d561b80/blacksamson.png?v=1681257731535');
INSERT INTO heroes (name, nickname, age, powers, abilities, gender, specie, allies, enemies, image) VALUES ('Kate Cha', 'Dupli-Kate (alter-ego)', 'Adulto', 'Self-Replication', 'N/A', 'Female', 'Human', 'Invincible, Atom Eve, Rex Splode, Robot, Shrinking Rae, Monster Girl', 'Flaxans, Machine Head, Kursk, Tether Tyrant, Furnace, Magmaniac, Battle Beast', 'https://cdn.glitch.global/a65e23b0-2def-47ca-b838-c29d3d561b80/duplikate.png?v=1681257695598');