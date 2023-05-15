import "./Connexion.css";
import NavBar from "./NavBar";

function Connexion() {
  return (
    <div>
        <NavBar/>
        <div className="Connexion">
          <h2>Connexion au site</h2>
          <div className="Connexion-form">
              <span>Mail</span>
              <input type="text" className="InputText" name="mail"/>
              <span>Mot de passe</span>
              <input type="text" className="InputText" name="mdp"/>
              <button className="ButtonForm">Mot de passe oublié ?</button>
              <button className="ButtonForm green">Valider</button>
          </div>
          <div>
              <span>
                  Nouveau sur le site ? <a href="/">S'inscrire</a>
              </span>
          </div>
        </div>
    </div>
  );
}

export default Connexion;
