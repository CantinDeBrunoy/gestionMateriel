import mysql from "mysql2"
import dotenv from "dotenv"

dotenv.config();

const pool = mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
}).promise();


export async function getUsers(){
    const request = await pool.query("SELECT * from utilisateur");
    return request[0];
}