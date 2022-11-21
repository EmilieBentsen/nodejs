import dotenv from "dotenv/config";
import express from "express";
const app = express();


/*import RedisStore from "connect-redis"

// redis@v4
import { createClient } from "redis"
let redisClient = createClient({ legacyMode: true })
redisClient.connect().catch(console.error)*/

import helmet from "helmet";
app.use(helmet());

import session from "express-session";
app.set("trust proxy", 1);
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { 
            domain: 'localhost',
            secure: false,
            maxAge: 1000 * 60 * 60,
            httpOnly: true,
            sameSite: false }
}));

console.log(session);
console.log("SECRET SESSION: " + process.env.SESSION_SECRET)

app.use(express.json());

import bodyParser from "body-parser"
app.use(bodyParser.json());

import cors from "cors";
app.use(cors({
    origin: "http://localhost:5174",
    credentials: true,
  }));




import usersRouter from "./routers/usersRouter.js";
app.use(usersRouter);




// import path from "path";
// app.use(express.static(path.resolve("../client/dist")));

const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => console.log("Server is running on port", PORT));
