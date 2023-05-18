import "./Connexion.css";
import NavBar from "./navBar/NavBar";
import axios from "axios";

function Connexion() {
  const verifierUser = async function() {
    const email = document.getElementsByName("mail")[0].value;
    const mdp = document.getElementsByName("mdp")[0].value;
    // const users = (await axios.get("http://127.0.0.1:3000/getUtilisateurs")).data;
    console.log(email);
    console.log(mdp);
    // console.log(users);
  }
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
