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
export async function getAdminNumber(){
    const request = await pool.query("SELECT COUNT(*) AS user_count FROM utilisateur WHERE role = 'admin'");
    return request[0];
}
export async function getUsersNumber(){
    const request = await pool.query("SELECT COUNT(*) AS user_count FROM utilisateur WHERE role = 'utilisateur'");
    return request[0];
}

export async function getTransaction(){
    const request = await pool.query("SELECT pretMateriel.id, pret.date_debut, pret.date_fin, utilisateur.nom,utilisateur.prenom,utilisateur.adresse_mail,materiel.nom from pretMateriel INNER JOIN materiel ON materiel.id = pretMateriel.materiel INNER JOIN pret on pret.id = pretMateriel.pret JOIN utilisateur ON utilisateur.id = pret.utilisateur");
    return request[0];
}

export async function getMateriels(){
    const request = await pool.query("SELECT * from materiel");
    return request[0];
}
export async function getPret(){
    const request = await pool.query("SELECT * from pret");
    return request[0];
}
export async function getPretMateriel(){
    const request = await pool.query("SELECT * from pretMateriel");
    return request[0];
}
export async function getPretTicket(){
    const request = await pool.query("SELECT pret.id, pret.date_debut, pret.date_fin, utilisateur.nom, utilisateur.adresse_mail, pret.nom, pret.description FROM pret INNER JOIN utilisateur ON pret.utilisateur = utilisateur.id;");
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

export async function deletePretMateriel(pret){
    const result = await pool.query(`DELETE FROM pret WHERE id = ?`,[pret.id]);
}

export async function addPret(pret) {
    const result = await pool.query(`INSERT INTO pret (date_debut, date_fin, utilisateur, nom, description) VALUES (?, ?, ?, ?, ?)`,
    [pret.dateDebut, pret.dateFin, pret.userId, pret.nom, pret.description]);
    return result[0].insertId;
}

export async function addPretMateriel(pretMateriel) {
    const result = await pool.query(`INSERT INTO pretMateriel (materiel, pret) VALUES (?, ?)`,
    [pretMateriel.idMateriel, pretMateriel.idPret]);
    return result[0].insertId;
}

export async function decrementMateriel(idMateriel) {
    const result = await pool.query(`UPDATE materiel SET quantite = quantite - 1 WHERE id = ?`,[idMateriel]);
    return result[0];
}

export async function incrementMateriel(idMateriel) {
    const result = await pool.query(`UPDATE materiel SET quantite = quantite + 1 WHERE id = ?`,[idMateriel]);
    return result[0];
}

export async function changeStatus(Status) {
    const result = await pool.query(`UPDATE utilisateur SET role = ? WHERE id = ?`,[Status.role,Status.id]);
    return result[0];
}