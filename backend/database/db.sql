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
INSERT INTO heroes (name, nickname, age, powers, abilities, gender, specie, allies, enemies, image) VALUES ('Rudolph Conners', 'Robot (alter-ego), Rudy', 'Adulto', 'Robotic Manipulation', 'High Intelligence, Engineering and Robotics Expertise, Tactical Expertise, Linguistics', 'Male', 'Human', 'Invincible, Atom Eve, Rex Splode, Dupli-Kate, Cecil Stedman, Monster Girl, Shrinking Rae, Black Samson', 'Flaxans, Battle Beast, Kursk, Furnace, Magmaniac, Machine Head, Tether Tyrant, Mauler Twins', 'https://cdn.glitch.global/a65e23b0-2def-47ca-b838-c29d3d561b80/robot.png?v=1681257727746'); 
INSERT INTO heroes (name, nickname, age, powers, abilities, gender, specie, allies, enemies, image) VALUES ('Markus Grimshaw', 'Black Samson (alter ego)', 'Adulto', 'N/A', 'Superhuman Strength', 'Male', 'Human', 'Invincible, Robot, Rex Splode, Monster Girl, Shrinking Rae, Dupli-Kate, Cecil Stedman', 'Battle Beast, Machine Head, Isotope, Magmaniac, Furnace, Kursk, Tether Tyrant, Omni-Man', 'https://cdn.glitch.global/a65e23b0-2def-47ca-b838-c29d3d561b80/blacksamson.png?v=1681257731535');
INSERT INTO heroes (name, nickname, age, powers, abilities, gender, specie, allies, enemies, image) VALUES ('Kate Cha', 'Dupli-Kate (alter-ego)', 'Adulto', 'Self-Replication', 'N/A', 'Female', 'Human', 'Invincible, Atom Eve, Rex Splode, Robot, Shrinking Rae, Monster Girl', 'Flaxans, Machine Head, Kursk, Tether Tyrant, Furnace, Magmaniac, Battle Beast', 'https://cdn.glitch.global/a65e23b0-2def-47ca-b838-c29d3d561b80/duplikate.png?v=1681257695598');
INSERT INTO heroes (name, nickname, age, powers, abilities, gender, specie, allies, enemies, image) VALUES ('Amanda', 'Monster Girl (alter ego) Monster Woman (formerly)', '24 years old', 'Cursed Physiology, Regenerative Healing Factor, Supernatural Durability, Supernatural Strength', 'Enhanced Combat', 'Female', 'Human', 'Invincible, Rex Splode, Robot, Shrinking Rae, Dupli-Kate, Cecil Stedman', 'N/A', 'https://cdn.glitch.global/a65e23b0-2def-47ca-b838-c29d3d561b80/monstergirl.png?v=1681267505952');
INSERT INTO heroes (name, nickname, age, powers, abilities, gender, specie, allies, enemies, image) VALUES ('Rex Sloane', 'Rex Splode (alter ego)', 'Adulto', 'Energy Projection, Enhanced Durability', 'Exceptional Agility', 'Male', 'Human', 'Invincible, Atom Eve, Robot, Monster Girl, Black Samson, Shrinking Rae, Dupli-Kate, Cecil Stedman', 'N/A', 'https://cdn.glitch.global/a65e23b0-2def-47ca-b838-c29d3d561b80/rexsplode.png?v=1681433851651');
INSERT INTO heroes (name, nickname, age, powers, abilities, gender, specie, allies, enemies, image) VALUES ('Unknown', 'Shrinking Rae (alter ego)', 'Adulto', 'Personal Size Manipulation (Size Reduction)', 'Escapology, Hand-to-Hand Combat, Stealth', 'Female', 'Human', 'Invincible, Robot, Rex Splode, Monster Girl, Black Samson, Dupli-Kate, Cecil Stedman', 'N/A', 'https://cdn.glitch.global/a65e23b0-2def-47ca-b838-c29d3d561b80/shrinkingrae.png?v=1681434084666');
INSERT INTO heroes (name, nickname, age, powers, abilities, gender, specie, allies, enemies, image) VALUES ('Samantha Eve Wilkins', 'Atom Eve (alter ego)', '18 years old', 'Subatomic Manipulation, Energy Manipulation, Flight', 'N/A', 'Female', 'Human', 'Invincible, Rex Splode, Dupli-Kate Robot, Ambert Bennett, William Clockwell, Shrinking Rae, Monster Girl, Black Samson, Cecil Stedman', 'Flaxans, Doc Seismic, Omni-Man', 'https://cdn.glitch.global/a65e23b0-2def-47ca-b838-c29d3d561b80/atomeve.png?v=1681434542271');

-- Villains
INSERT INTO villains (name, nickname, gender, powers, abilities, specie, allies, enemies, image) VALUES ('Unknown', 'Mauler Twins, Maulers', 'Male', 'Super Strength, Super Durability, Healing Factor', 'Genius Level Intellect, Cloning Expertise, Memory Duplication, Surgery', 'Unknown', 'N/A', 'Guardians of the Globe, Omni-man, Robot', 'https://cdn.glitch.global/a65e23b0-2def-47ca-b838-c29d3d561b80/maulers.png?v=1681435786697');
INSERT INTO villains (name, nickname, gender, powers, abilities, specie, allies, enemies, image) VALUES ('Nolan', 'Omni-Man (alter ego)', 'Male', 'Viltrumite Physiology, Superhuman Strength, Superhuman Speed, Sonic Boom Generation, Superhuman Stamina, Enhanced Lung Capacity, Nigh-Invulnerability, Flight, Enhanced Healing Factor, Longevity', 'Master Combatant, Master Manipulator', 'Viltrumite', 'Art Rosenbaum (formerly), Cecil Stedman (formerly), Guardians of the Globe (formerly)', 'Guardians of the Globe, Mauler Twins, Flaxans, Cecil Stedman, Donald Ferguson, Global Defense Agency, Damien Darkblood, ReAnimen, Hail Mary, Invincible', 'https://cdn.glitch.global/a65e23b0-2def-47ca-b838-c29d3d561b80/omniman.png?v=1681441028810');