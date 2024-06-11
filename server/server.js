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


const PORT  = process.env.PORT || 8000 ;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URL || `mongodb+srv://${USERNAME}:${PASSWORD}@flipkartclone.mbbxyox.mongodb.net/?retryWrites=true&w=majority&appName=FlipkartClone`;

Connection(URL);

if(process.env.NODE_ENV === 'production')
{
    app.use(express.static('client/build'))
}
app.listen(PORT , () => console.log(`Server is running on ${PORT}`));

defaultdata();