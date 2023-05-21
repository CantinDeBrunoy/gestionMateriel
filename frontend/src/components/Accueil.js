import "./Accueil.css"
import illustration from "../assets/images/illu-tmp.jpg"
import illustration2 from "../assets/images/illu2-tmp.jpg"
import NavBar from '../components/navBar/NavBar'
import { StoreContext } from "../store/store.js"
import { useContext } from "react";

function Accueil() {
    const { state, dispatch } = useContext(StoreContext);
    return (
       
      <div>
        <NavBar />
        <div className="Accueil">
          <div className="Accueil-card">
            <h1>Le Mauvais Coin</h1>
            <span>Le coin des malandrins</span>
            <p>
              Le Mauvais Coin, c'est le coin des malandrins (mais pas que...). Vous souhaitez louer du
              matériel pour un projet personnel ? C'est ici que ça ce passe. Connectez-vous et vous pourrez 
              créer des tickets avec la liste des éléments dont vous avez besoin. Ensuite présentez vous 
              avec votre ticket pour récupérer tout votre matériel.<br/>
              <br/>
              C'est simple et pratique alors qu'attendez vous ?
            </p>
            {state.connected === false ? (
              <a href="/inscription" className="green">
                Je m'inscris !
              </a>
            ) : null}
          </div>
          <div className="Accueil-image">
            <img src={illustration} alt="Logo de l'appli"/>
          </div>
        </div>
        {state.connected ?
          <div className="Accueil-ticket">
            <div className="Accueil-card white-transparent">
              <h2>Passer une commande</h2>
              <p>
                Vous souhaitez passer une commande ?<br/>
                Ca se passe par-ici :
              </p>
              <a href="/ticket" className="green">Je créé un ticket !</a>
            </div>
            <div className="Accueil-image">
              <img src={illustration2} alt="Logo de l'appli"/>
            </div>
          </div>
        : null}
      </div>
    );
  }
  
  export default Accueil;
  