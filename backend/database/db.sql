CREATE DATABASE guardians_of_the_globe;

use guardians_of_the_globe;

-- Heroes Table
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

-- Schedule Table
CREATE TABLE schedule(
    id INT AUTO_INCREMENT PRIMARY KEY,
    heroe_id INT,
    FOREIGN KEY (heroe_id) REFERENCES heroes(id),
    schedule varchar(200),
    scheduletime varchar(200)
);

-- Villains Table
CREATE TABLE villains(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    nickname VARCHAR(100),
    gender varchar(50),
    powers varchar(250),
    abilities varchar(250),
    specie varchar (50),
    allies varchar(250),
    enemies varchar(250),
    image varchar(250)
);

CREATE TABLE sponsor(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    quantity INT,
    source VARCHAR(100),
    heroe_id INT,
    FOREIGN KEY (heroe_id) REFERENCES heroes(id),
    image varchar(250)
);

-- Heroes
INSERT INTO heroes (id, name, nickname, age, powers, abilities, gender, specie, allies, enemies, image) VALUES (1, 'Rudolph Conners', 'Robot (alter-ego), Rudy', 'Adulto', 'Robotic Manipulation', 'High Intelligence, Engineering and Robotics Expertise, Tactical Expertise, Linguistics', 'Male', 'Human', 'Invincible, Atom Eve, Rex Splode, Dupli-Kate, Cecil Stedman, Monster Girl, Shrinking Rae, Black Samson', 'Flaxans, Battle Beast, Kursk, Furnace, Magmaniac, Machine Head, Tether Tyrant, Mauler Twins', 'https://raw.githubusercontent.com/adsantiago/reto-sophos/master/backend/images/robot.png'); 
INSERT INTO heroes (id, name, nickname, age, powers, abilities, gender, specie, allies, enemies, image) VALUES (2, 'Markus Grimshaw', 'Black Samson (alter ego)', 'Adulto', 'N/A', 'Superhuman Strength', 'Male', 'Human', 'Invincible, Robot, Rex Splode, Monster Girl, Shrinking Rae, Dupli-Kate, Cecil Stedman', 'Battle Beast, Machine Head, Isotope, Magmaniac, Furnace, Kursk, Tether Tyrant, Omni-Man', 'https://raw.githubusercontent.com/adsantiago/reto-sophos/master/backend/images/blacksamson.png');
INSERT INTO heroes (id, name, nickname, age, powers, abilities, gender, specie, allies, enemies, image) VALUES (3, 'Kate Cha', 'Dupli-Kate (alter-ego)', 'Adulto', 'Self-Replication', 'N/A', 'Female', 'Human', 'Invincible, Atom Eve, Rex Splode, Robot, Shrinking Rae, Monster Girl', 'Flaxans, Machine Head, Kursk, Tether Tyrant, Furnace, Magmaniac, Battle Beast', 'https://raw.githubusercontent.com/adsantiago/reto-sophos/master/backend/images/duplikate.png');
INSERT INTO heroes (id, name, nickname, age, powers, abilities, gender, specie, allies, enemies, image) VALUES (4, 'Amanda', 'Monster Girl (alter ego) Monster Woman (formerly)', '24 years old', 'Cursed Physiology, Regenerative Healing Factor, Supernatural Durability, Supernatural Strength', 'Enhanced Combat', 'Female', 'Human', 'Invincible, Rex Splode, Robot, Shrinking Rae, Dupli-Kate, Cecil Stedman', 'N/A', 'https://raw.githubusercontent.com/adsantiago/reto-sophos/master/backend/images/monstergirl.png');
INSERT INTO heroes (id, name, nickname, age, powers, abilities, gender, specie, allies, enemies, image) VALUES (5, 'Rex Sloane', 'Rex Splode (alter ego)', 'Adulto', 'Energy Projection, Enhanced Durability', 'Exceptional Agility', 'Male', 'Human', 'Invincible, Atom Eve, Robot, Monster Girl, Black Samson, Shrinking Rae, Dupli-Kate, Cecil Stedman', 'N/A', 'https://raw.githubusercontent.com/adsantiago/reto-sophos/master/backend/images/rexsplode.png');
INSERT INTO heroes (id, name, nickname, age, powers, abilities, gender, specie, allies, enemies, image) VALUES (6, 'Unknown', 'Shrinking Rae (alter ego)', 'Adulto', 'Personal Size Manipulation (Size Reduction)', 'Escapology, Hand-to-Hand Combat, Stealth', 'Female', 'Human', 'Invincible, Robot, Rex Splode, Monster Girl, Black Samson, Dupli-Kate, Cecil Stedman', 'N/A', 'https://raw.githubusercontent.com/adsantiago/reto-sophos/master/backend/images/shrinkingrae.png');
INSERT INTO heroes (id, name, nickname, age, powers, abilities, gender, specie, allies, enemies, image) VALUES (7, 'Samantha Eve Wilkins', 'Atom Eve (alter ego)', '18 years old', 'Subatomic Manipulation, Energy Manipulation, Flight', 'N/A', 'Female', 'Human', 'Invincible, Rex Splode, Dupli-Kate Robot, Ambert Bennett, William Clockwell, Shrinking Rae, Monster Girl, Black Samson, Cecil Stedman', 'Flaxans, Doc Seismic, Omni-Man', 'https://raw.githubusercontent.com/adsantiago/reto-sophos/master/backend/images/atomeve.png');

-- Villains
INSERT INTO villains (id, name, nickname, gender, powers, abilities, specie, allies, enemies, image) VALUES (1, 'Unknown', 'Mauler Twins, Maulers', 'Male', 'Super Strength, Super Durability, Healing Factor', 'Genius Level Intellect, Cloning Expertise, Memory Duplication, Surgery', 'Unknown', 'N/A', 'Guardians of the Globe, Omni-man, Robot', 'https://raw.githubusercontent.com/adsantiago/reto-sophos/master/backend/images/maulers.png');
INSERT INTO villains (id, name, nickname, gender, powers, abilities, specie, allies, enemies, image) VALUES (2, 'Nolan', 'Omni-Man', 'Male', 'Viltrumite Physiology, Superhuman Strength, Superhuman Speed, Sonic Boom Generation, Superhuman Stamina, Enhanced Lung Capacity, Nigh-Invulnerability, Flight, Enhanced Healing Factor, Longevity', 'Master Combatant, Master Manipulator', 'Viltrumite', 'Art Rosenbaum (formerly), Cecil Stedman (formerly), Guardians of the Globe (formerly)', 'Guardians of the Globe, Mauler Twins, Flaxans, Cecil Stedman, Donald Ferguson, Global Defense Agency, Damien Darkblood, ReAnimen, Hail Mary, Invincible', 'https://raw.githubusercontent.com/adsantiago/reto-sophos/master/backend/images/omniman.png');
INSERT INTO villains (id, name, nickname, gender, powers, abilities, specie, allies, enemies, image) VALUES (3, 'Unknown', 'Machine Head', 'Male', 'Quantum Probabilities Upgrade', 'Leadership, Tactician', 'Cyborg', 'Isotope (bodyguard, formerly), Battle Beast, Furnace, Kursk, Magmaniac, Tether Tyrant', 'Invincible, Titan, Guardians of the Globe', 'https://raw.githubusercontent.com/adsantiago/reto-sophos/master/backend/images/machinehead.png');
INSERT INTO villains (id, name, nickname, gender, powers, abilities, specie, allies, enemies, image) VALUES (4, 'Thokk', 'Battle Beast', 'Male', 'Super Strength, Fighting Skills, Stamina and Resilience, Mace Proficiency', 'N/A', 'Alien', 'N/A', 'Invincible, Titan, Guardians of the Globe', 'https://raw.githubusercontent.com/adsantiago/reto-sophos/master/backend/images/battlebeast.png');
INSERT INTO villains (id, name, nickname, gender, powers, abilities, specie, allies, enemies, image) VALUES (5, 'Unknown', 'Tether Tyrant', 'Male', 'Unique Physiology, Stretchy Tentacles, Superhuman Strength', 'N/A', 'Human', 'Magmaniac, Kursk, Battle Beast, Furnace, Machine Head', 'Invincible, Titan, Guardians of the Globe', 'https://raw.githubusercontent.com/adsantiago/reto-sophos/master/backend/images/tethertyrant.png');
INSERT INTO villains (id, name, nickname, gender, powers, abilities, specie, allies, enemies, image) VALUES (6, 'Unknown', 'Kursk', 'Male', 'Electrokinesis', 'N/A', 'Human', 'Tether Tyrant, Magmaniac, Furnace, Battle Beast, Machine Head', 'Invincible, Red Rush, Titan, Guardians of the Globe', 'https://raw.githubusercontent.com/adsantiago/reto-sophos/master/backend/images/kursk.png');
INSERT INTO villains (id, name, nickname, gender, powers, abilities, specie, allies, enemies, image) VALUES (7, 'Unknown', 'Furnace', 'Male', 'N/A', 'N/A', 'N/A', 'Magmaniac, Tether Tyrant, Battle Beast, Kursk, Machine Head', 'Invincible, Titan, Guardians of the Globe', 'https://raw.githubusercontent.com/adsantiago/reto-sophos/master/backend/images/furnace.png');
INSERT INTO villains (id, name, nickname, gender, powers, abilities, specie, allies, enemies, image) VALUES (8, 'Unknown', 'Magmaniac', 'Male', 'Lava Blast, Heat Generation, Shape-Shifter, Size Alteration', 'N/A', 'Human', 'Tether Tyrant, Furnace, Kursk, Machine Head', 'Invincible, Titan, Guardians of the Globe', 'https://raw.githubusercontent.com/adsantiago/reto-sophos/master/backend/images/magmaniac.png');

--Schedule
INSERT INTO schedule (heroe_id, scheduletime, schedule) VALUES (1, '1,14 5,11 3,12', 'Familiar reunion, Heroes reunion, Intelligence briefing');
INSERT INTO schedule (heroe_id, scheduletime, schedule) VALUES (2, '3,08 5,09 1,14', 'Mission planning meeting, Heroes reunion, Team training');
INSERT INTO schedule (heroe_id, scheduletime, schedule) VALUES (3, '4,10 3,16 5,14', 'Meeting with the scientific team, Press conference, Follow-up meeting of the support team');
INSERT INTO schedule (heroe_id, scheduletime, schedule) VALUES (4, '1,08 2,13 4,15', 'Public relations meeting, Meeting with sponsors, Update meeting');
INSERT INTO schedule (heroe_id, scheduletime, schedule) VALUES (5, '5,07 3,09 2,12', 'Strategy meeting, Team Meeting, Familiar reunion');
INSERT INTO schedule (heroe_id, scheduletime, schedule) VALUES (6, '1,10 4,15 2,08', 'Debriefing meeting, Mission planning meeting, Public relations meeting');
INSERT INTO schedule (heroe_id, scheduletime, schedule) VALUES (7, '2,09 3,16 5,12', 'Morining class, Meeting with sponsors, Heroes reunion');

--Sponsor
INSERT INTO sponsor (name, quantity, source, heroe_id, image) VALUES('Patrocinador A', 100000, 'Fuente A', 1, "https://cdn.glitch.global/a65e23b0-2def-47ca-b838-c29d3d561b80/logoA.png?v=1684295199996");
INSERT INTO sponsor (name, quantity, source, heroe_id, image) VALUES('Patrocinador B', 500000, 'Fuente B', 1, "https://cdn.glitch.global/a65e23b0-2def-47ca-b838-c29d3d561b80/logoB.png?v=1684295205742");




