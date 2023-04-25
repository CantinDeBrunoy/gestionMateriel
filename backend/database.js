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


export async function getMateriels(){
    const request = await pool.query("SELECT * from materiel");
    return request[0];
}

export async function addUtilisateur(utilisateur){ 
    const result = await pool.query(`INSERT INTO utilisateur (nom, prenom, adresse_mail, mot_de_passe, role) VALUES ('${utilisateur.nom}', '${utilisateur.prenom}', '${utilisateur.adresse_mail}', '${utilisateur.mot_de_passe}', 'utilisateur')`);
    return result[0];
}

export async function addMateriel(materiel){ 
    const result = await pool.query(`INSERT INTO materiel (nom, categorie, prix, marque, quantite) VALUES ('${materiel.nom}', '${materiel.categorie}', ${materiel.prix}, '${materiel.marque}', ${materiel.quantite})`);
    return result[0];
}