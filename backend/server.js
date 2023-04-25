import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { getUsers ,getMateriels,addUtilisateur,addMateriel} from "./database.js";

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

//AjoutPersonne
app.post('/AjoutUtilisateur',async(req,res)=> {
    const utilisateur = {
        nom : 'Didi',
        prenom : 'Didier',
        adresse_mail : 'Didier.Didi@gmail.com',
        mot_de_passe : 'mdp',
        role: 'utilisateur'
    };
    const user = await addUtilisateur(utilisateur);
    res.send(user);
});

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



app.listen(port,()=> console.log(`app is running on port ${port} :D`));