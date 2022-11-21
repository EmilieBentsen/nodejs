import db from "./connection_sqlite.js";

const isInDeleteMode = true;

if (isInDeleteMode) {
    db.exec(`
        DROP TABLE IF EXISTS users;
    `);
}

db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email VARCHAR(255),
    password VARCHAR(255)
);
`);

// seed the database
if (isInDeleteMode) {
    db.run(`INSERT INTO users (email, password) VALUES ("emilie.bentsen@gmail.com", "KlimaKriger123&");`);
    db.run(`INSERT INTO users (email, password) VALUES ("emil717s@stud.kea.dk", "SaveThePlanet1989");`);
}

