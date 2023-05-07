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

-- Heroes
INSERT INTO heroes (id, name, nickname, age, powers, abilities, gender, specie, allies, enemies, image) VALUES (1, 'Rudolph Conners', 'Robot (alter-ego), Rudy', 'Adulto', 'Robotic Manipulation', 'High Intelligence, Engineering and Robotics Expertise, Tactical Expertise, Linguistics', 'Male', 'Human', 'Invincible, Atom Eve, Rex Splode, Dupli-Kate, Cecil Stedman, Monster Girl, Shrinking Rae, Black Samson', 'Flaxans, Battle Beast, Kursk, Furnace, Magmaniac, Machine Head, Tether Tyrant, Mauler Twins', 'https://cdn.glitch.global/a65e23b0-2def-47ca-b838-c29d3d561b80/robot.png?v=1681257727746'); 
INSERT INTO heroes (id, name, nickname, age, powers, abilities, gender, specie, allies, enemies, image) VALUES (2, 'Markus Grimshaw', 'Black Samson (alter ego)', 'Adulto', 'N/A', 'Superhuman Strength', 'Male', 'Human', 'Invincible, Robot, Rex Splode, Monster Girl, Shrinking Rae, Dupli-Kate, Cecil Stedman', 'Battle Beast, Machine Head, Isotope, Magmaniac, Furnace, Kursk, Tether Tyrant, Omni-Man', 'https://cdn.glitch.global/a65e23b0-2def-47ca-b838-c29d3d561b80/blacksamson.png?v=1681257731535');
INSERT INTO heroes (id, name, nickname, age, powers, abilities, gender, specie, allies, enemies, image) VALUES (3, 'Kate Cha', 'Dupli-Kate (alter-ego)', 'Adulto', 'Self-Replication', 'N/A', 'Female', 'Human', 'Invincible, Atom Eve, Rex Splode, Robot, Shrinking Rae, Monster Girl', 'Flaxans, Machine Head, Kursk, Tether Tyrant, Furnace, Magmaniac, Battle Beast', 'https://cdn.glitch.global/a65e23b0-2def-47ca-b838-c29d3d561b80/duplikate.png?v=1681257695598');
INSERT INTO heroes (id, name, nickname, age, powers, abilities, gender, specie, allies, enemies, image) VALUES (4, 'Amanda', 'Monster Girl (alter ego) Monster Woman (formerly)', '24 years old', 'Cursed Physiology, Regenerative Healing Factor, Supernatural Durability, Supernatural Strength', 'Enhanced Combat', 'Female', 'Human', 'Invincible, Rex Splode, Robot, Shrinking Rae, Dupli-Kate, Cecil Stedman', 'N/A', 'https://cdn.glitch.global/a65e23b0-2def-47ca-b838-c29d3d561b80/monstergirl.png?v=1681267505952');
INSERT INTO heroes (id, name, nickname, age, powers, abilities, gender, specie, allies, enemies, image) VALUES (5, 'Rex Sloane', 'Rex Splode (alter ego)', 'Adulto', 'Energy Projection, Enhanced Durability', 'Exceptional Agility', 'Male', 'Human', 'Invincible, Atom Eve, Robot, Monster Girl, Black Samson, Shrinking Rae, Dupli-Kate, Cecil Stedman', 'N/A', 'https://cdn.glitch.global/a65e23b0-2def-47ca-b838-c29d3d561b80/rexsplode.png?v=1681433851651');
INSERT INTO heroes (id, name, nickname, age, powers, abilities, gender, specie, allies, enemies, image) VALUES (6, 'Unknown', 'Shrinking Rae (alter ego)', 'Adulto', 'Personal Size Manipulation (Size Reduction)', 'Escapology, Hand-to-Hand Combat, Stealth', 'Female', 'Human', 'Invincible, Robot, Rex Splode, Monster Girl, Black Samson, Dupli-Kate, Cecil Stedman', 'N/A', 'https://cdn.glitch.global/a65e23b0-2def-47ca-b838-c29d3d561b80/shrinkingrae.png?v=1681434084666');
INSERT INTO heroes (id, name, nickname, age, powers, abilities, gender, specie, allies, enemies, image) VALUES (7, 'Samantha Eve Wilkins', 'Atom Eve (alter ego)', '18 years old', 'Subatomic Manipulation, Energy Manipulation, Flight', 'N/A', 'Female', 'Human', 'Invincible, Rex Splode, Dupli-Kate Robot, Ambert Bennett, William Clockwell, Shrinking Rae, Monster Girl, Black Samson, Cecil Stedman', 'Flaxans, Doc Seismic, Omni-Man', 'https://cdn.glitch.global/a65e23b0-2def-47ca-b838-c29d3d561b80/atomeve.png?v=1681434542271');

-- Villains
INSERT INTO villains (id, name, nickname, gender, powers, abilities, specie, allies, enemies, image) VALUES (1, 'Unknown', 'Mauler Twins, Maulers', 'Male', 'Super Strength, Super Durability, Healing Factor', 'Genius Level Intellect, Cloning Expertise, Memory Duplication, Surgery', 'Unknown', 'N/A', 'Guardians of the Globe, Omni-man, Robot', 'https://cdn.glitch.global/a65e23b0-2def-47ca-b838-c29d3d561b80/maulers.png?v=1681435786697');
INSERT INTO villains (id, name, nickname, gender, powers, abilities, specie, allies, enemies, image) VALUES (2, 'Nolan', 'Omni-Man', 'Male', 'Viltrumite Physiology, Superhuman Strength, Superhuman Speed, Sonic Boom Generation, Superhuman Stamina, Enhanced Lung Capacity, Nigh-Invulnerability, Flight, Enhanced Healing Factor, Longevity', 'Master Combatant, Master Manipulator', 'Viltrumite', 'Art Rosenbaum (formerly), Cecil Stedman (formerly), Guardians of the Globe (formerly)', 'Guardians of the Globe, Mauler Twins, Flaxans, Cecil Stedman, Donald Ferguson, Global Defense Agency, Damien Darkblood, ReAnimen, Hail Mary, Invincible', 'https://cdn.glitch.global/a65e23b0-2def-47ca-b838-c29d3d561b80/omniman.png?v=1681441028810');
INSERT INTO villains (id, name, nickname, gender, powers, abilities, specie, allies, enemies, image) VALUES (3, 'Unknown', 'Machine Head', 'Male', 'Quantum Probabilities Upgrade', 'Leadership, Tactician', 'Cyborg', 'Isotope (bodyguard, formerly), Battle Beast, Furnace, Kursk, Magmaniac, Tether Tyrant', 'Invincible, Titan, Guardians of the Globe', 'https://cdn.glitch.global/a65e23b0-2def-47ca-b838-c29d3d561b80/maulers.png?v=1681435786697');
INSERT INTO villains (id, name, nickname, gender, powers, abilities, specie, allies, enemies, image) VALUES (4, 'Thokk', 'Battle Beast', 'Male', 'Super Strength, Fighting Skills, Stamina and Resilience, Mace Proficiency', 'N/A', 'Alien', 'N/A', 'Invincible, Titan, Guardians of the Globe', '');
INSERT INTO villains (id, name, nickname, gender, powers, abilities, specie, allies, enemies, image) VALUES (5, 'Unknown', 'Tether Tyrant', 'Male', 'Unique Physiology, Stretchy Tentacles, Superhuman Strength', 'N/A', 'Human', 'Magmaniac, Kursk, Battle Beast, Furnace, Machine Head', 'Invincible, Titan, Guardians of the Globe', '');
INSERT INTO villains (id, name, nickname, gender, powers, abilities, specie, allies, enemies, image) VALUES (6, 'Unknown', 'Kursk', 'Male', 'Electrokinesis', 'N/A', 'Human', 'Tether Tyrant, Magmaniac, Furnace, Battle Beast, Machine Head', 'Invincible, Red Rush, Titan, Guardians of the Globe', '');
INSERT INTO villains (id, name, nickname, gender, powers, abilities, specie, allies, enemies, image) VALUES (7, 'Unknown', 'Furnace', 'Male', 'N/A', 'N/A', 'N/A', 'Magmaniac, Tether Tyrant, Battle Beast, Kursk, Machine Head', 'Invincible, Titan, Guardians of the Globe', '');
INSERT INTO villains (id, name, nickname, gender, powers, abilities, specie, allies, enemies, image) VALUES (8, 'Unknown', 'Magmaniac', 'Male', 'Lava Blast, Heat Generation, Shape-Shifter, Size Alteration', 'N/A', 'Human', 'Tether Tyrant, Furnace, Kursk, Machine Head', 'Invincible, Titan, Guardians of the Globe', '');

--Schedule
INSERT INTO schedule (heroe_id, scheduletime, schedule) VALUES (1, '1,14 5,11 3,12', 'Familiar reunion, Heroes reunion, Intelligence briefing');
INSERT INTO schedule (heroe_id, scheduletime, schedule) VALUES (2, '3,08 5,09 1,14', 'Mission planning meeting, Heroes reunion, Team training');
INSERT INTO schedule (heroe_id, scheduletime, schedule) VALUES (3, '4,10 3,16 5,14', 'Meeting with the scientific team, Press conference, Follow-up meeting of the support team');
INSERT INTO schedule (heroe_id, scheduletime, schedule) VALUES (4, '1,08 2,13 4,15', 'Public relations meeting, Meeting with sponsors, Update meeting');
INSERT INTO schedule (heroe_id, scheduletime, schedule) VALUES (5, '5,07 3,09 2,12', 'Strategy meeting, Team Meeting, Familiar reunion');
INSERT INTO schedule (heroe_id, scheduletime, schedule) VALUES (6, '1,10 4,15 2,08', 'Debriefing meeting, Mission planning meeting, Public relations meeting');
INSERT INTO schedule (heroe_id, scheduletime, schedule) VALUES (7, '2,09 3,16 5,12', 'Morining class, Meeting with sponsors, Heroes reunion');




