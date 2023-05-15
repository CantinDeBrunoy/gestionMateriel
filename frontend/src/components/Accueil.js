import "./Accueil.css"
import NavBar from "./NavBar";
import logo from "../assets/images/logo-tmp.png"

function Accueil() {
    return (
      <div>
          <NavBar/>
          <div className="Accueil">
            <div className="Accueil-left">
              <div className="Accueil-presentation">
                <h1 className="Acueil-titre">Le Mauvais Coin</h1>
                <span className="Accueil-logan">Le coin des malandrins</span>
              </div>
            </div>
            <div className="Accueil-image">
              <img src={logo} alt="Logo de l'appli"/>
            </div>

          </div>
      </div>
    );
  }
  
  export default Accueil;
  