import "./Connexion.css";
import axios from "axios";
import { StoreContext } from "../store/store.js";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Toaster from "./Toaster";
import NavBar from '../components/navBar/NavBar'

function Connexion() {
  const { state, dispatch } = useContext(StoreContext);
  const navigate = useNavigate();
  const [showToaster,setShowToaster] = useState(false);
  const [infoToaster,setInfoToaster] = useState({
    message:'',
    setShowToaster,
    type:'Warning',
    taille:'petit'
  });

  const verifierUser = async function() {
    const email = document.getElementsByName("mail")[0].value;
    const mdp = document.getElementsByName("mdp")[0].value;

    if (!mdp || !email) {
      setInfoToaster({
        message:'Entrez vos informations !',
        setShowToaster,
        type:'Warning',
        taille:'petit',
      });
      setShowToaster(true);
      return;
    }

    const users = (await axios.get("http://127.0.0.1:4000/getUtilisateurs")).data;
    console.log(users);
    let userExists = false;
    let correctUser;
    users.forEach(user => {
      if (user.adresse_mail === email) {
        userExists = true;
        correctUser = user;
      }
    })
    if (!userExists) {
      setInfoToaster({
        message:'L utilsateur n existe pas !',
        setShowToaster,
        type:'Warning',
        taille:'petit',
      });
      setShowToaster(true);
      return;
    }
    if (mdp !== correctUser.mot_de_passe) {
      setInfoToaster({
        message:'Mot de passe incorrect',
        setShowToaster,
        type:'Warning',
        taille:'petit',
      });
      setShowToaster(true);
      return;
    } 
    state.connected = true;
    state.currentUserName = correctUser.adresse_mail;
    state.currentUserRole = correctUser.role;
    state.currentUserId = correctUser.id;
    state.currentName = correctUser.nom;
    state.currentForname = correctUser.prenom;

    navigate("/");
    

  }
  return (
    <div>
      {showToaster && <Toaster message={infoToaster.message} setShowToaster={infoToaster.setShowToaster} type={infoToaster.type} taille={infoToaster.taille}/>}
      <NavBar />
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
