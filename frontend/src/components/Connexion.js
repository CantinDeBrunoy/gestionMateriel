import "./Connexion.css";
import axios from "axios";
import { StoreContext } from "../store/store.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


function Connexion() {
  const { state, dispatch } = useContext(StoreContext);
  const navigate = useNavigate();

  const verifierUser = async function() {
    const email = document.getElementsByName("mail")[0].value;
    const mdp = document.getElementsByName("mdp")[0].value;

    if (!mdp || !email) {
      alert("Entrez vos informations !")
      return;
    }

    const users = (await axios.get("http://127.0.0.1:3000/getUtilisateurs")).data;
    let userExists = false;
    let correctUser;
    users.forEach(user => {
      if (user.adresse_mail === email) {
        userExists = true;
        correctUser = user;
      }
    })
    if (!userExists) {
      alert("L'utilsateur n'existe pas !");
      return;
    }
    if (mdp !== correctUser.mot_de_passe) {
      alert("Mot de passe incorrect");
      return;
    } 
    state.connected = true;
    state.currentUserName = correctUser.adresse_mail;
    state.currentUserRole = correctUser.role;
    state.currentUserId = correctUser.id;

    navigate("/");
    

  }
  return (
    <div>
        <div className="Connexion">
          <h2>Connexion au site</h2>
          <div className="Connexion-form">
              <span>Mail</span>
              <input type="text" className="InputText" name="mail"/>
              <span>Mot de passe</span>
              <input type="password" className="InputText" name="mdp"/>
              <button className="ButtonForm green" onClick={verifierUser}>Valider</button>
          </div>
          <div>
              <span>
                  Nouveau sur le site ? <a href="/Inscription">S'inscrire</a>
              </span>
          </div>
        </div>
    </div>
  );
}

export default Connexion;
