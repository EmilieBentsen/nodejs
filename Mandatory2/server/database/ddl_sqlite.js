import db from "./connection_sqlite.js"
import bcrypt from "bcryptjs"

const isInDeleteMode = true

if (isInDeleteMode) {
    db.exec(`
        DROP TABLE IF EXISTS users
    `);
}

db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email VARCHAR(255),
    password VARCHAR(255)
);
`);

const salt1 = await bcrypt.genSalt(15)
const newHashedPassword1 = await bcrypt.hash("KlimaKriger123&", salt1)
const salt2 = await bcrypt.genSalt(15)
const newHashedPassword2 = await bcrypt.hash("SaveThePlanet1989&", salt2)


// seed the database
if (isInDeleteMode) {
    db.run(`INSERT INTO users (email, password) VALUES (?,?);`, ["klimaLine@yahoo.com", newHashedPassword1])
    db.run(`INSERT INTO users (email, password) VALUES (?,?);`, ["anne@grønfremtid.com", newHashedPassword2])

}

