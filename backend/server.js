import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { getUsers ,getMateriels,addUtilisateur,addMateriel, addPret, addPretMateriel, decrementMateriel, incrementMateriel, getTransaction,getPretTicket} from "./database.js";


const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
dotenv.config();



//RecupUser
app.get("/getUtilisateurs",async(req,res)=> {
    const personnes = await getUsers();
    res.send(personnes);
})

//getMateriel
app.get("/getMateriels",async(req,res)=> {
    const materiels = await getMateriels();
    res.send(materiels);
})
app.get("/getTransaction",async(req,res)=> {
    const transaction = await getTransaction();
    res.send(transaction);
})
app.get("/getPretTicket",async(req,res)=> {
    const transaction = await getPretTicket();
    res.send(transaction);
})
//getPret
app.get("/getPret",async(req,res)=> {
    const prets = await getPret();
    res.send(prets);
})
//getPretMateriel

app.get("/getPretMateriel",async(req,res)=> {
    const pretMateriel = await getPretMateriel();
    res.send(pretMateriel);
})

//AjoutPersonne
app.post('/AjoutUtilisateur',async(req,res)=> {
   /* const utilisateur = {
        nom : 'Didi',
        prenom : 'Didier',
        adresse_mail : 'Didier.Didi@gmail.com',
        mot_de_passe : 'mdp',
        role: 'utilisateur'
    }; */
    const user = req.body;
    const newUser = await addUtilisateur(user);
    res.send(newUser);
});

app.post('/DeletePretMateriel',async(req,res)=>{
    const pret = req.body;
    const deletePret = await deletePretMateriel(pret);
    res.send(deletePret);
})

//AjoutMateriel
app.post('/AjoutMateriel',async(req,res)=> {
    const materielTmp = {
        nom : 'truelle',
        categorie : 'bricolage',
        prix : 15,
        marque : 'Leroy Merlin',
        quantite: 5
    };

    const materiel = await addMateriel(materielTmp);
    res.send(materiel);
});

//AjoutPret
app.post('/AjoutPret', async (req, res) => {
    const pret = req.body;
    const newPret = await addPret(pret);
    const response = {
        idPret: newPret
    }
    res.send(response);
})

app.post('/AjoutPretMateriel', async (req, res) => {
    const pretMateriel = req.body;
    await addPretMateriel(pretMateriel);
    await decrementMateriel(pretMateriel.idMateriel)
    res.send(201);
})

app.post('/IncrementMateriel', async (req, res) => {
    const idMateriel = req.body.idMateriel;
    await incrementMateriel(idMateriel);
})

app.listen(port,()=> console.log(`app is running on port ${port} :D`));