import "./Inscription.css";
import axios from "axios";

function Inscription() {
  const createUser = async function() {
    const nom = document.getElementsByName("nom")[0].value;
    const prenom = document.getElementsByName("prenom")[0].value;
    const mail = document.getElementsByName("mail")[0].value;
    const mdp = document.getElementsByName("mdp")[0].value;
    const confirmMdp = document.getElementsByName("confirmMdp")[0].value;

    if (!nom || !prenom || !mail || !mdp || !confirmMdp) {
      console.log("Formulaire pas rempli");
      return;
    }
    if (mdp !== confirmMdp) {
      console.log("MDP différents");
      return;
    }

    const body = {
      nom: nom,
      prenom: prenom,
      adresse_mail: mail,
      mot_de_passe: mdp,
      role: "utilisateur"
    };

    const newUser = (await axios.post("http://127.0.0.1:3000/AjoutUtilisateur", body)).data;
    console.log("Utilisateur créé : "+newUser);
  }
  return (
  <div className="Inscrpition">
    <h2>Nom de l'appli</h2>
    <h3>Je créé mon compte : </h3>
    <div className="Inscription-form">
        <span>Nom</span>
        <input type="text" className="InputText" name="nom"/>
        <span>Prenom</span>
        <input type="text" className="InputText" name="prenom"/>
        <span>Adresse mail</span>
        <input type="text" className="InputText" name="mail"/>
        <span>Mot de passe</span>
        <input type="text" className="InputText" name="mdp"/>
        <span>Confirmer le mot de passe</span>
        <input type="checkbox" className="InputCheckbox"/> Afficher les mots de passe
        <input type="text" className="InputText" name="confirm_mdp"/>
        <button className="ButtonForm green" onClick={createUser}>Valider</button>
    </div>
  </div>
  );
}

export default Inscription;
