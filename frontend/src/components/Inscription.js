import "./Inscription.css";
import NavBar from "./navBar/NavBar";
import logo from "../assets/images/logo-tmp.png"

function Inscription() {
  return (
  <div>
    <NavBar/>
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
            <input type="text" className="InputText" name="mdp" placeholder="Mot de passe"/>
            <input type="text" className="InputText" name="confirm_mdp" placeholder="Confirmer"/>
          </div>
          <div>
            <input type="checkbox" className="InputCheckbox"/> Afficher les mots de passe
          </div>
          <button className="ButtonForm green">Valider</button>
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
