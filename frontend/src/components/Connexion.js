import "./Connexion.css";
<<<<<<< HEAD
import NavBar from "./navBar/NavBar";
=======
import axios from "axios";
>>>>>>> ff9d73e5b36ccdbe85ed39af1c2baa90dddb3910

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
<<<<<<< HEAD
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
=======
    <div className="Connexion">
        <h2>Connexion au site</h2>
        <div className="Connexion-form">
            <span>Mail</span>
            <input type="text" className="InputText" name="mail"/>
            <span>Mot de passe</span>
            <input type="text" className="InputText" name="mdp"/>
            <button className="ButtonForm blue">Mot de passe oublié ?</button>
            <button className="ButtonForm green" onClick={verifierUser}>Valider</button>
        </div>
        <div>
            <span>
                Nouveau sur le site ? <a href="/">S'inscrire</a>
            </span>
>>>>>>> ff9d73e5b36ccdbe85ed39af1c2baa90dddb3910
        </div>
    </div>
  );
}

export default Connexion;
