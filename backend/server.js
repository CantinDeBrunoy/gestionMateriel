import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { getUsers } from "./database.js";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
dotenv.config();

//requetes kekettes

app.get("/getUtilisateurs",async(req,res)=> {
    const personnes = await getUsers();
    res.send(personnes);
})

app.listen(port,()=> console.log(`app is running on port ${port} :D`));