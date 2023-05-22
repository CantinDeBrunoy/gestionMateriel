import "./NavBar.css"
import profilePicture from "../../assets/images/profile-circle.svg"
import laTete from "../../assets/images/Le_mauvais_coin_3.png"

import * as React from "react";
import { StoreContext } from "../../store/store.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [displayDropdown, setDisplayDropdown] = React.useState(false);
  const showDropdown = () => setDisplayDropdown(!displayDropdown);
  const { state, dispatch } = useContext(StoreContext);
  const navigate = useNavigate();
  // Inside your component
  const navigateToRechercheMateriel = () => {
    navigate('/rechercheMateriel');
  };
  const navigateToTicket = () => {
    navigate('/ticket');
  };
  const navigateToMenuAdmin = () => {
    navigate('/MenuAdmin');
  };
  const navigateToMenuUser = () => {
    navigate('/MenuUser');
  };

  if (state.connected && state.currentUserRole ==="utilisateur") {
    return (
      <div className="NavBar">
        <div className="NavBar-Titre">
          <a className="NavBar-LMC" href="/" >
            <img src={laTete} height="50px"/>
            <span>Le mauvais coin</span>
          </a>
          <a>Wsh la street cv {state.currentForname} {state.currentName}</a>
        </div>

        <div className="NavBar-large-screen">
          <a href ="/Connexion">Se déconnecter</a>
          <a onClick={navigateToRechercheMateriel}>Recherche Materiel</a>
          <a onClick={navigateToTicket}>Créer Ticket</a>
          <a onClick={navigateToMenuUser}>Voir Pret</a>
        </div>
        <div className="NavBar-dropdown">
          <img src={profilePicture} alt="Logo profil" onClick={showDropdown} />
          {displayDropdown ? (
            <div className="NavBar-dropdown-content">
              <a>Wsh la street cv {state.currentForname} {state.currentName}</a>
              <a href ="/Connexion">Se déconnecter</a>
              <a onClick={navigateToRechercheMateriel}>Recherche Materiel</a>
              <a onClick={navigateToTicket}>Créer Ticket</a>
              <a onClick={navigateToMenuUser}>Voir Pret</a>

            </div>
          ) : null}
        </div>
      </div>
    );
  }
  if (state.connected && state.currentUserRole ==="admin") {
    return (
      <div className="NavBar">
        <div className="NavBar-Titre">
          <a className="NavBar-LMC" href="/" >
            <img src={laTete} height="50px"/>
            <span>Le mauvais coin</span>
          </a>
          <a>Wsh la street cv {state.currentForname} {state.currentName}</a>
        </div>
        <div className="NavBar-large-screen">
              <a href ="/Connexion">Se déconnecter</a>
              <a onClick={navigateToRechercheMateriel}>Recherche Materiel</a>
              <a onClick={navigateToTicket}>Créer Ticket</a>
              <a onClick={navigateToMenuAdmin}>Menu Admin</a>
        </div>
        <div className="NavBar-dropdown">
          <img src={profilePicture} alt="Logo profil" onClick={showDropdown} />
          {displayDropdown ? (
            <div className="NavBar-dropdown-content">
              <a>Wsh la street cv {state.currentForname} {state.currentName}</a>
              <a href ="/Connexion">Se déconnecter</a>
              <a onClick={navigateToRechercheMateriel}>Recherche Materiel</a>
              <a onClick={navigateToTicket}>Créer Ticket</a>
              <a onClick={navigateToMenuAdmin}>Menu Admin</a>
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  if (state.connected === false) {
    return (
      <div className="NavBar">
        <div className="NavBar-Titre">
          <a className="NavBar-LMC" href="/" >
            <img src={laTete} height="50px"/>
            <span>Le mauvais coin</span>
          </a>
        </div>
        <div className="NavBar-large-screen">
          <a href="/Connexion">Connexion</a>
          <a href="/Inscription">Inscription</a>
        </div>
        <div className="NavBar-dropdown">
          <img src={profilePicture} alt="Logo profil" onClick={showDropdown} />
          {displayDropdown ? (
            <div className="NavBar-dropdown-content">
              <a href="/Connexion">Connexion</a>
              <a href="/Inscription">Inscription</a>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default NavBar;