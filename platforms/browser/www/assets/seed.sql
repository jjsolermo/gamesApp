CREATE TABLE IF NOT EXISTS  "ships" (
	"Id"	INTEGER NOT NULL,
	"Type"	TEXT NOT NULL,
	"Class"	TEXT,
	"CP"	INTEGER NOT NULL,
	"Attack_Strength"	TEXT,
	"Defense_Strength"	TEXT,
	"Hull_Size"	INTEGER,
	"Description"	TEXT,
    "Buy" BOOLEAN DEFAULT 0,
	"TAttack" INTEGER DEFAULT 0,
	"TDefense" INTEGER DEFAULT 0,
	"TTactics" INTEGER DEFAULT 0,
	"TMove" INTEGER DEFAULT 1,
	"TOther" TEXT,
	PRIMARY KEY("Id" AUTOINCREMENT)
);
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description,Buy) VALUES ('SC #1', 'Scout', 6, 'E3 (A6-8)', '0', 1, 'May have increased firepower versus fighters depending on level of point defense technology - A6 at PD1, A7 at PD2, A8 at PD3.',1);
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description,Buy) VALUES ('SC #2', 'Scout', 6, 'E3 (A6-8)', '0', 1, 'May have increased firepower versus fighters depending on level of point defense technology - A6 at PD1, A7 at PD2, A8 at PD3.',1);
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description,Buy) VALUES ('SC #3', 'Scout', 6, 'E3 (A6-8)', '0', 1, 'May have increased firepower versus fighters depending on level of point defense technology - A6 at PD1, A7 at PD2, A8 at PD3.',1);
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('SC #4', 'Scout', 6, 'E3 (A6-8)', '0', 1, 'May have increased firepower versus fighters depending on level of point defense technology - A6 at PD1, A7 at PD2, A8 at PD3.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('SC #5', 'Scout', 6, 'E3 (A6-8)', '0', 1, 'May have increased firepower versus fighters depending on level of point defense technology - A6 at PD1, A7 at PD2, A8 at PD3.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('DD #1', 'Destroyer', 9, 'D4', '0', 1, 'Must have Ship Size Technology of 2 or more to build. Can detect cloaked ships (raiders) depending on level of scanning technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('DD #2', 'Destroyer', 9, 'D4', '0', 1, 'Must have Ship Size Technology of 2 or more to build. Can detect cloaked ships (raiders) depending on level of scanning technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('DD #3', 'Destroyer', 9, 'D4', '0', 1, 'Must have Ship Size Technology of 2 or more to build. Can detect cloaked ships (raiders) depending on level of scanning technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('DD #4', 'Destroyer', 9, 'D4', '0', 1, 'Must have Ship Size Technology of 2 or more to build. Can detect cloaked ships (raiders) depending on level of scanning technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('CA #1', 'Cruiser', 12, 'C4', '1', 2, 'Must have Ship Size Technology of 3 or more to build. Can be equipped with Exploration Technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('CA #2', 'Cruiser', 12, 'C4', '1', 2, 'Must have Ship Size Technology of 3 or more to build. Can be equipped with Exploration Technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('CA #3', 'Cruiser', 12, 'C4', '1', 2, 'Must have Ship Size Technology of 3 or more to build. Can be equipped with Exploration Technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('CA #4', 'Cruiser', 12, 'C4', '1', 2, 'Must have Ship Size Technology of 3 or more to build. Can be equipped with Exploration Technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('BC #1', 'Battlecruiser', 15, 'B5', '1', 2, 'Must have Ship Size Technology of 4 or more to build.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('BC #2', 'Battlecruiser', 15, 'B5', '1', 2, 'Must have Ship Size Technology of 4 or more to build.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('BC #3', 'Battlecruiser', 15, 'B5', '1', 2, 'Must have Ship Size Technology of 4 or more to build.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('BC #4', 'Battlecruiser', 15, 'B5', '1', 2, 'Must have Ship Size Technology of 4 or more to build.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('BB #1', 'Battleship', 20, 'A5', '2', 3, 'Must have Ship Size Technology of 5 or more to build.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('BB #2', 'Battleship', 20, 'A5', '2', 3, 'Must have Ship Size Technology of 5 or more to build.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('BB #3', 'Battleship', 20, 'A5', '2', 3, 'Must have Ship Size Technology of 5 or more to build.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('BB #4', 'Battleship', 20, 'A5', '2', 3, 'Must have Ship Size Technology of 5 or more to build.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('DN #1', 'Dreadnaught', 24, 'A6', '3', 3, 'Must have Ship Size Technology of 6 or more to build.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('DN #2', 'Dreadnaught', 24, 'A6', '3', 3, 'Must have Ship Size Technology of 6 or more to build.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('F #1', 'Fighter 1', 5, 'B5', '0', 1, 'Must have fighters 1 technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('F #2', 'Fighter 1', 5, 'B5', '0', 1, 'Must have fighters 1 technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('F #3', 'Fighter 1', 5, 'B5', '0', 1, 'Must have fighters 1 technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('F #4', 'Fighter 1', 5, 'B5', '0', 1, 'Must have fighters 1 technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('F #5', 'Fighter 1', 5, 'B5', '0', 1, 'Must have fighters 1 technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('F #6', 'Fighter 1', 5, 'B5', '0', 1, 'Must have fighters 1 technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('F #7', 'Fighter 1', 5, 'B5', '0', 1, 'Must have fighters 1 technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('F #8', 'Fighter 1', 5, 'B5', '0', 1, 'Must have fighters 1 technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('F #1', 'Fighter 2', 5, 'B6', '0', 1, 'Must have fighters 2 technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('F #2', 'Fighter 2', 5, 'B6', '0', 1, 'Must have fighters 2 technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('F #3', 'Fighter 2', 5, 'B6', '0', 1, 'Must have fighters 2 technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('F #4', 'Fighter 2', 5, 'B6', '0', 1, 'Must have fighters 2 technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('F #5', 'Fighter 2', 5, 'B6', '0', 1, 'Must have fighters 2 technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('F #6', 'Fighter 2', 5, 'B6', '0', 1, 'Must have fighters 2 technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('F #7', 'Fighter 2', 5, 'B6', '0', 1, 'Must have fighters 2 technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('F #8', 'Fighter 2', 5, 'B6', '0', 1, 'Must have fighters 2 technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('F #1', 'Fighter 3', 5, 'B7', '1', 1, 'Must have fighters 3 technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('F #2', 'Fighter 3', 5, 'B7', '1', 1, 'Must have fighters 3 technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('F #3', 'Fighter 3', 5, 'B7', '1', 1, 'Must have fighters 3 technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('F #4', 'Fighter 3', 5, 'B7', '1', 1, 'Must have fighters 3 technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('F #5', 'Fighter 3', 5, 'B7', '1', 1, 'Must have fighters 3 technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('F #6', 'Fighter 3', 5, 'B7', '1', 1, 'Must have fighters 3 technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('F #7', 'Fighter 3', 5, 'B7', '1', 1, 'Must have fighters 3 technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('F #8', 'Fighter 3', 5, 'B7', '1', 1, 'Must have fighters 3 technology.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('R #1', 'Raider', 12, 'A/D4/5', '0', 2, 'Can only build when at cloaking technology 1+.Attacks at D4 against groups with a scanner ship,A4 without.Attack strength increases to A5/D5 if at cloaking technology level 2,Raiders get +1 to their attack rating the first round of combat when attacking ships without appropriate scanner technology.Raiders get no benefits from their cloaking technology while in nebulae');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('R #2', 'Raider', 12, 'A/D4/5', '0', 2, 'Can only build when at cloaking technology 1+.Attacks at D4 against groups with a scanner ship,A4 without.Attack strength increases to A5/D5 if at cloaking technology level 2,Raiders get +1 to their attack rating the first round of combat when attacking ships without appropriate scanner technology.Raiders get no benefits from their cloaking technology while in nebulae');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('R #3', 'Raider', 12, 'A/D4/5', '0', 2, 'Can only build when at cloaking technology 1+.Attacks at D4 against groups with a scanner ship,A4 without.Attack strength increases to A5/D5 if at cloaking technology level 2,Raiders get +1 to their attack rating the first round of combat when attacking ships without appropriate scanner technology.Raiders get no benefits from their cloaking technology while in nebulae');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('R #4', 'Raider', 12, 'A/D4/5', '0', 2, 'Can only build when at cloaking technology 1+.Attacks at D4 against groups with a scanner ship,A4 without.Attack strength increases to A5/D5 if at cloaking technology level 2,Raiders get +1 to their attack rating the first round of combat when attacking ships without appropriate scanner technology.Raiders get no benefits from their cloaking technology while in nebulae');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('CV #1', 'Carrier', 12, 'E3', '0', 1, 'Can carry up 3 fighters squadrons.Must have fighter technology to build.The carrier may participate in combat,but can not target until all friendly fighters(not just those on that particular carrier) present in the battle are destroyed');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('CV #2', 'Carrier', 12, 'E3', '0', 1, 'Can carry up 3 fighters squadrons.Must have fighter technology to build.The carrier may participate in combat,but can not target until all friendly fighters(not just those on that particular carrier) present in the battle are destroyed');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('CV #3', 'Carrier', 12, 'E3', '0', 1, 'Can carry up 3 fighters squadrons.Must have fighter technology to build.The carrier may participate in combat,but can not target until all friendly fighters(not just those on that particular carrier) present in the battle are destroyed');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('CV #4', 'Carrier', 12, 'E3', '0', 1, 'Can carry up 3 fighters squadrons.Must have fighter technology to build.The carrier may participate in combat,but can not target until all friendly fighters(not just those on that particular carrier) present in the battle are destroyed');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('CO', 'Colony Ship', 8, '0', '0', 1, '(0 - Mant) Can colonize planets.Always has a movement tech of 1.Is destroyed instantly during movement or combat if there are enemy combat ships present and there are no friendly combat ships.Can not retreat.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('Base', 'Base', 12, 'A7', '2', 3, '(0 - Mant) Must have Ship Size Technology of 2 or more to build.Cannot move.Only one Base can be in any system.Bases pay no maintenance.Is not built by SYs � a producing colony can build one base/turnBases are automatically upgraded to the highest technology for free.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description,Buy) VALUES ('Miner 1', 'Mining Ship', 5, '0', '0', 1, '(0 - Mant) Can pick up minerals and Space Wrecks.Always has a movement tech of 1.Is destroyed instantly during movement or combat if there are enemycombat ships present and there are no friendly combat ships.Can not retreat.',1);
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('Miner 2', 'Mining Ship', 5, '0', '0', 1, '(0 - Mant) Can pick up minerals and Space Wrecks.Always has a movement tech of 1.Is destroyed instantly during movement or combat if there are enemycombat ships present and there are no friendly combat ships.Can not retreat.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('Decoy', 'Decoy', 1, '0', '0', 0, 'Automatically removed in combat.Purchased during the economic phase at friendly colony.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('Colony', 'Colony', 0, '0', '0', 0, 'Defends at strength of 0 and can not fire.Only one round of fire is allowed at a colony.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description,Buy) VALUES ('SY 1', 'Ship Yard', 6, 'C3', '0', 1, '(0 - Mant) Allows ships to be built.May only be built at a colony that produced income.Only one may be built at any one colony per economic phase.SYs are automatically upgraded to the highest technology for free(obviously limited by hull size).',1);
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description,Buy) VALUES ('SY 2', 'Ship Yard', 6, 'C3', '0', 1, '(0 - Mant) Allows ships to be built.May only be built at a colony that produced income.Only one may be built at any one colony per economic phase.SYs are automatically upgraded to the highest technology for free(obviously limited by hull size).',1);
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description,Buy) VALUES ('SY 3', 'Ship Yard', 6, 'C3', '0', 1, '(0 - Mant) Allows ships to be built.May only be built at a colony that produced income.Only one may be built at any one colony per economic phase.SYs are automatically upgraded to the highest technology for free(obviously limited by hull size).',1);
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description,Buy) VALUES ('SY 4', 'Ship Yard', 6, 'C3', '0', 1, '(0 - Mant) Allows ships to be built.May only be built at a colony that produced income.Only one may be built at any one colony per economic phase.SYs are automatically upgraded to the highest technology for free(obviously limited by hull size).',1);
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('SW #1', 'Mine Sweeper', 6, 'E1', '0', 1, 'Must have Mine Sweeper technology of 1 or more to build.Ship removes some mines before combat.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('SW #2', 'Mine Sweeper', 6, 'E1', '0', 1, 'Must have Mine Sweeper technology of 1 or more to build.Ship removes some mines before combat.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('SW #3', 'Mine Sweeper', 6, 'E1', '0', 1, 'Must have Mine Sweeper technology of 1 or more to build.Ship removes some mines before combat.');
INSERT or IGNORE INTO ships (Type, Class, CP, Attack_Strength, Defense_Strength, Hull_Size, Description) VALUES ('SW #4', 'Mine Sweeper', 6, 'E1', '0', 1, 'Must have Mine Sweeper technology of 1 or more to build.Ship removes some mines before combat.');

CREATE TABLE IF NOT EXISTS  "techs" (
	"Id"	INTEGER NOT NULL,
	"Name"	TEXT NOT NULL,
	"Value"	INTEGER,
	"Cost"	INTEGER,
	"Description"	TEXT,
    "Buy" BOOLEAN default 'True',
	PRIMARY KEY("Id" AUTOINCREMENT)
);
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ('Ships Size', 2, 10, 'Can build DD,Base');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ('Ships Size', 3, 15, 'Can build CA');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ('Ships Size', 4, 20, 'Can build BC');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ('Ships Size', 5, 20, 'Can build BB');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ('Ships Size', 6, 20, 'Can build DN');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description,Buy) VALUES ('Attack', 0, 0, 'Add 0 to a ship''s attack rating when in battle',1);
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ('Attack', 1, 20, 'Add 1 to a ship''s attack rating when in battle');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ('Attack', 2, 30, 'Add 2 to a ship''s attack rating when in battle (up to the ship''s limit)');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ('Attack', 3, 25, 'Add 3 to a ship''s attack rating when in battle (up to the ship''s limit)');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description,Buy) VALUES ( 'Ships Size', 1, 0, 'Can build SC,CO,SY,Miner,Decoy,MS Pipeline',1);
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Defense', 0, 0, 'Add 0 to a ship''s defense rating when in battle');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Defense', 1, 20, 'Add 1 to a ship''s defense rating when in battle');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Defense', 2, 30, 'Add 2 to a ship''s defense rating when in battle (up to the ship''s limit)');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Defense', 3, 25, 'Add 3 to a ship''s defense rating when in battle (up to the ship''s limit)');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Tactics', 0, 0, 'When opposin ships both have the same fire rating (E,C,D,etc..), the side with the higher tactical rating fires firts, If the tactical is also tied,the defender fire first.This rating is not limit by the tecnology limit(hull size) of a ship!');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Tactics', 1, 15, 'When opposin ships both have the same fire rating (E,C,D,etc..), the side with the higher tactical rating fires firts, If the tactical is also tied,the defender fire first.This rating is not limit by the tecnology limit(hull size) of a ship!');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Tactics', 2, 15, 'When opposin ships both have the same fire rating (E,C,D,etc..), the side with the higher tactical rating fires firts, If the tactical is also tied,the defender fire first.This rating is not limit by the tecnology limit(hull size) of a ship!');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Tactics', 3, 15, 'When opposin ships both have the same fire rating (E,C,D,etc..), the side with the higher tactical rating fires firts, If the tactical is also tied,the defender fire first.This rating is not limit by the tecnology limit(hull size) of a ship!');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description ,Buy) VALUES ( 'Move', 1, 0, 'Can move 1 hex per turn',1);
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Move', 2, 20, 'Can move 1 hex in each first two turns,and two hexes in the third turn');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Move', 3, 25, 'Can move 1 hex the first turn, and two hexes in each of the second and third turns');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Move', 4, 25, 'Can move 2 hex per turn');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Move', 5, 25, 'Can move 2 hex in each first two turns,and 3 hexes in the third turn');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Move', 6, 20, 'Can move 2 hex the first turn, and 3 hexes in each of the second and third turns');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Move', 7, 20, 'Can move 3 hex per turn');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description,Buy) VALUES ( 'Ship Yards', 1, 0, 'Can build a 1 hull point per SY',1);
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Ship Yards', 2, 20, 'Can build a 1.5 hull point per SY (rounded down)');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Ship Yards', 3, 25, 'Can build a 2 hull point per SY');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Terraforming', 0, 0, 'Can only colonize non-barren planets');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Terraforming', 1, 20, 'Can colonize any planets');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Exploration', 0, 0, 'Exploration as normal');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Exploration', 1, 15, 'CAs may be equipped with special exploration technology which allows then to flip one adjacent System Maker before they move');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Fighters', 0, 0, ' ');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Fighters', 1, 25, 'Can build CVs and Fighter 1');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Fighters', 2, 25, 'Can build CVs and upgrade to Fighter 2');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Fighters', 3, 25, 'Can build CVs and upgrade to Fighter 3');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Point Defense', 0, 0, ' ');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Point Defense', 1, 20, 'Scouts fire at fighters at A6');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Point Defense', 2, 20, 'Scouts fire at fighters at A7');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Point Defense', 3, 20, 'Scouts fire at fighters at A8');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Cloaking', 0, 0, ' ');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Cloaking', 1, 30, 'Can build raiders');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Cloaking', 2, 30, 'Raiders increase in streght and become harder to detect');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Scanners', 0, 0, ' ');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Scanners', 1, 20, 'Destroyers can detect raiders with cloaking level 1');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Scanners', 2, 20, 'Destroyers can detect raiders with cloaking level 2');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Mines', 0, 0, ' ');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Mines', 1, 30, 'Can build mines');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Mine Sweeper', 0, 0, ' ');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Mine Sweeper', 1, 10, 'Can build Mine Sweepers.Each Mine Sweepers sweeps 1 mine before combat');
INSERT or IGNORE  INTO techs ( Name, Value, Cost, Description) VALUES ( 'Mine Sweeper', 2, 15, 'Each mine sweepers sweep 2 mines before combat');

CREATE TABLE IF NOT EXISTS  "turn" (
	"Id"	INTEGER NOT NULL,
	"CPS"	INTEGER DEFAULT 0,
	PRIMARY KEY("Id" AUTOINCREMENT)
);

INSERT or IGNORE  INTO turn ( CPS) VALUES (0);
