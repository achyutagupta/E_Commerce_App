import express from "express";
import dotenv from "dotenv";
import Connection from "./database/db.js";
import defaultdata from "./default.js";
import Router from "./routes/route.js";
import cors from 'cors';
import bodyParser from "body-parser";

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/' , Router);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username , password);

const PORT  = 8000;
app.listen(PORT , () => console.log(`Server is running on ${PORT}`));

defaultdata();