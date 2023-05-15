import "./Accueil.css"
import NavBar from "./navBar/NavBar";
import illustration from "../assets/images/illu-tmp.jpg"

function Accueil() {
    return (
      <div>
        <NavBar/>
        <div className="Accueil">
          <div className="Accueil-left">
            <div className="Accueil-presentation">
              <h1>Le Mauvais Coin</h1>
              <span>Le coin des malandrins</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis lectus neque. 
                Nam pharetra metus nunc, eget dictum odio elementum ac. Suspendisse sed blandit felis. 
                Suspendisse potenti. Duis non ultrices massa. Phasellus ipsum elit, auctor id justo vitae, 
                maximus cursus lectus. Ut efficitur iaculis magna, in rhoncus dui pulvinar eget. 
                Nam sit amet cursus dui.
              </p>
              <button className="green">Je m'inscris !</button>
            </div>
          </div>
          <div className="Accueil-image">
            <img src={illustration} alt="Logo de l'appli"/>
          </div>
        </div>
      </div>
    );
  }
  
  export default Accueil;
  