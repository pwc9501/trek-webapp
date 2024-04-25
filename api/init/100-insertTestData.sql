/**
 * This SQL script inserts test data into various tables of the database, including UserData, Users, Rangers, Trips, and TripDestinations.
 *
 * The script includes the following operations:
 * 1. Inserts records into the 'UserData' table, providing personal data for test users.
 * 2. Inserts records into the 'Users' table, providing user credentials and linking them to corresponding UserData.
 * 3. Inserts records into the 'Rangers' table, indicating that certain users are rangers.
 * 4. Inserts records into the 'Trips' table, providing details of test trips, including trip creator, participants, and trip logistics.
 * 5. Inserts records into the 'TripDestinations' table, specifying destinations for each trip.
 *
 * Note: The IDs used in the INSERT statements should correspond to existing IDs in the referenced tables.
 *       Ensure that the referenced tables exist and have the required structure before executing this script.
 */
INSERT INTO UserData
    (id, first_name, last_name, phone, address, city, state, zip)
VALUES
    (1, 'Alice', 'Tester', '555-555-5555', '1 sesime', 'lakewood', 'NY', '13456'),
    (2, 'Bob', 'Tester', '555-555-6666', '2 sesimee', 'buffalo', 'NY', '09090');

INSERT INTO Users
    (id, username, password, data_id)
VALUES
    (1, 'alice', 'b109f3bbbc244eb82441917ed06d618b9008dd09b3befd1b5e07394c706a8bb980b1d7785e5976ec049b46df5f1326af5a2ea6d103fd07c95385ffab0cacbc86', 1), -- password is 'password'
    (2, 'bob', 'b109f3bbbc244eb82441917ed06d618b9008dd09b3befd1b5e07394c706a8bb980b1d7785e5976ec049b46df5f1326af5a2ea6d103fd07c95385ffab0cacbc86', 2); -- password is 'password'

INSERT INTO Rangers (id)
VALUES
    (1);

/**
 * Inserts data into the 'Trips' table, providing details of test trips.
 */
INSERT INTO Trips
    (confirm_code, creator, first_name, last_name, street, city, state, zip_code, date, start, purpose, phone, duration, party_size)
VALUES
    ('AAAAAAA', 1, 'Joe', 'Poe', '1 maple', 'lakewood', 'NY', '11111', '01-01-2023 12:00:00', 1, 'Test Data', '444-444-4444', 1, 2),
    ('BBBBBBB', 2, 'Poe', 'Joe', '2 maple', 'lakewood', 'NY', '22222', '01-05-2023 12:00:00', 3, 'Test Data', '333-333-3333', 2, 1),
    ('CCCCCCC', 1, 'Shmoe', 'Lo', '3 maple', 'lakewood', 'NY', '11111', '01-01-2024 12:00:00', 2, 'Test Data', '444-444-4444', 1, 2),
    ('DDDDDDD', 2, 'Flo', 'Jo', '4 maple', 'lakewood', 'NY', '22222', '01-05-2024 12:00:00', 4, 'Test Data', '333-333-3333', 2, 1),
    ('amamama', 2, 'Cam', 'Jo', '4 maple', 'lakewood', 'NY', '22222', '01-06-2024 12:00:00', 4, 'Test Data', '333-333-3333', 2, 4),
    ('lllllll', 2, 'Johnny', 'Jo', '4 maple', 'lakewood', 'NY', '22222', '01-07-2024 12:00:00', 5, 'Test Data', '333-333-3333', 2, 7),
    ('ppppppp', 2, 'Jonah', 'Jo', '4 maple', 'lakewood', 'NY', '22222', '01-08-2024 12:00:00', 3, 'Test Data', '333-333-3333', 2, 5),
    ('mlmlmll', 2, 'Heather', 'Jo', '4 maple', 'lakewood', 'NY', '22222', '01-09-2024 12:00:00', 2, 'Test Data', '333-333-3333', 2, 1),
    ('poppolp', 2, 'Quincy', 'Jo', '4 maple', 'lakewood', 'NY', '22222', '01-10-2024 12:00:00', 4, 'Test Data', '333-333-3333', 2, 9),
    ('mnmsbvn', 1, 'Craig', 'Jo', '4 maple', 'lakewood', 'NY', '22222', '01-11-2024 12:00:00', 49, 'Test Data', '333-333-3333', 2, 20),
    ('asdfgfs', 1, 'Marc', 'Jo', '4 maple', 'lakewood', 'NY', '22222', '01-12-2024 12:00:00', 49, 'Test Data', '333-333-3333', 2, 11),
    ('polited', 1, 'Elon', 'Jo', '4 maple', 'lakewood', 'NY', '22222', '01-13-2024 12:00:00', 50, 'Test Data', '333-333-3333', 2, 3),
    ('wereted', 1, 'Will', 'Jo', '4 maple', 'lakewood', 'NY', '22222', '01-05-2024 12:00:00', 1, 'Test Data', '333-333-3333', 2, 4),
    ('ghdjncm', 1, 'Nicole', 'Jo', '4 maple', 'lakewood', 'NY', '22222', '01-05-2024 12:00:00', 2, 'Test Data', '333-333-3333', 2, 5),
    ('poltiye', 2, 'Terry', 'Jo', '4 maple', 'lakewood', 'NY', '22222', '01-06-2024 12:00:00', 3, 'Test Data', '333-333-3333', 2, 1),
    ('qweddns', 2, 'Pam', 'Harris', '4 maple', 'lakewood', 'NY', '22222', '01-05-2024 12:00:00', 4, 'Test Data', '333-333-3333', 2, 7);

/**
 * Inserts data into the 'TripDestinations' table, specifying destinations for each trip.
 */
INSERT INTO TripDestinations
    (trip_id, destination)
VALUES
    (1, 4),
    (1, 5),
    (1, 1),
    (2, 6),
    (2, 7),
    (2, 8),
    (2, 3),
    (3, 1),
    (3, 2),
    (3, 3),
    (3, 4),
    (4, 1),
    (4, 2),
    (4, 6),
    (4, 4),
    (4, 5),
    (4, 8),
    (5, 1),
    (5, 2),
    (5, 3),
    (5, 4),
    (5, 9),
    (5, 12),
    (6, 1),
    (6, 22),
    (6, 32),
    (6, 41),
    (6, 31),
    (6, 33),
    (7, 1),
    (7, 2),
    (7, 3),
    (7, 4),
    (7, 5),
    (7, 6),
    (8, 7),
    (8, 6),
    (8, 3),
    (8, 4),
    (8, 5),
    (8, 8),
    (9, 1),
    (9, 2),
    (9, 3),
    (9, 4),
    (9, 9),
    (9, 7),
    (10, 11),
    (10, 22),
    (10, 13),
    (10, 14),
    (10, 23),
    (10, 31),
    (11, 10),
    (11, 2),
    (11, 3),
    (11, 4),
    (11, 13),
    (11, 31),
    (12, 11),
    (12, 12),
    (12, 32),
    (12, 42),
    (12, 3),
    (12, 2),
    (13, 1),
    (13, 2),
    (13, 3),
    (13, 4),
    (13, 9),
    (13, 43),
    (14, 31),
    (14, 32),
    (14, 33),
    (14, 34),
    (14, 43),
    (14, 38),
    (15, 1),
    (15, 2),
    (15, 3),
    (15, 4),
    (15, 8),
    (16, 1),
    (16, 2),
    (16, 3),
    (16, 4),
    (16, 5),
    (16, 6);
