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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis lectus neque. 
                Nam pharetra metus nunc, eget dictum odio elementum ac. Suspendisse sed blandit felis. 
                Suspendisse potenti. Duis non ultrices massa. Phasellus ipsum elit, auctor id justo vitae, 
                maximus cursus lectus. Ut efficitur iaculis magna, in rhoncus dui pulvinar eget. 
                Nam sit amet cursus dui.
              </p>
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
  