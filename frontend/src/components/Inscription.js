import "./Inscription.css";
import logo from "../assets/images/logo-tmp.png"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Toaster from "./Toaster";
import NavBar from '../components/navBar/NavBar'

function Inscription() {
  const navigate = useNavigate();
  const [showToaster,setShowToaster] = useState(false);
  const [infoToaster,setInfoToaster] = useState({
    message:'',
    setShowToaster,
    type:'Warning',
    taille:'petit'
  });

  const afficherMdp = function(e) {
    const mdp = document.getElementsByName("mdp")[0];
    const confirmMdp = document.getElementsByName("confirm_mdp")[0]; 
    if (e.target.checked) {
      mdp.type = "text";
      confirmMdp.type = "text";
    } else {
      mdp.type = "password";
      confirmMdp.type = "password";
    }
  }

  const createUser = async function() {
    const nom = document.getElementsByName("nom")[0].value;
    const prenom = document.getElementsByName("prenom")[0].value;
    const mail = document.getElementsByName("mail")[0].value;
    const mdp = document.getElementsByName("mdp")[0].value;
    const confirmMdp = document.getElementsByName("confirm_mdp")[0].value;

    if (!nom || !prenom || !mail || !mdp || !confirmMdp) {
      setInfoToaster({
        message:'Remplissez le formulaire !',
        setShowToaster,
        type:'Warning',
        taille:'petit',
      });
      setShowToaster(true);
      return;
    }

    const existingUsers = (await axios.get("http://127.0.0.1:4000/getUtilisateurs")).data;
    for (let i in existingUsers) {
      if (existingUsers[i].adresse_mail === mail) {
        setInfoToaster({
          message:'L utilisateur existe déjà !',
          setShowToaster,
          type:'Warning',
          taille:'petit',
        });
        setShowToaster(true);
        return;
      }
    }

    if (mdp !== confirmMdp) {
      setInfoToaster({
        message:'Mots de passe différents !',
        setShowToaster,
        type:'Warning',
        taille:'petit',
      });
      setShowToaster(true);
      return;
    }

    const body = {
      nom: nom,
      prenom: prenom,
      adresse_mail: mail,
      mot_de_passe: mdp,
      role: "utilisateur"
    };

    await axios.post("http://127.0.0.1:4000/AjoutUtilisateur", body);
    setInfoToaster({
      message:'Utilisateur créé !',
      setShowToaster,
      type:'Success',
      taille:'petit',
    });
    setShowToaster(true);
    setTimeout(() => {
      navigate("/Connexion");
    }, 3000);
  }
  return (
  <div>
    {showToaster && <Toaster message={infoToaster.message} setShowToaster={infoToaster.setShowToaster} type={infoToaster.type} taille={infoToaster.taille}/>}
    <NavBar />
    <div className="Inscription">
      <div className="Inscription-form">
        <div className="Inscription-left">
          <h3 className="Inscription-titre">Créer votre compte Le Mauvais Coin</h3>
          <div >
            <input type="text" className="InputText" name="nom" placeholder="Nom"/>
            <input type="text" className="InputText" name="prenom" placeholder="Prénom"/>
          </div>
            <input type="text" className="InputText" name="mail" placeholder="Adresse mail"/>
          <div>
            <input type="password" className="InputText" name="mdp" placeholder="Mot de passe"/>
            <input type="password" className="InputText" name="confirm_mdp" placeholder="Confirmer"/>
          </div>
          <div>
            <input type="checkbox" className="InputCheckbox" onClick={afficherMdp}/> Afficher les mots de passe
          </div>
          <button className="ButtonForm green" onClick={createUser}>Valider</button>
        </div>
        <div className="Inscription-right">
          <img src={logo} alt="Logo de l'appli"/>
          <span>Le Mauvais Coin, le coin des malandrins</span>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Inscription;
