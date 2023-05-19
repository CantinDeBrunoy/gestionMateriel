import "./NavBar.css"
import profilePicture from "../../assets/images/profile-circle.svg"
import * as React from "react";

function NavBar() {
  const [displayDropdown, setDisplayDropdown] = React.useState(false);
  const showDropdown = () => setDisplayDropdown(!displayDropdown);

  return (
      <div className="NavBar">
          <a href="/" className="NavBar-Titre">Le Mauvais Coin</a>
          <div className="NavBar-large-screen">
            <a href="/Connexion">Connexion</a>
            <a href="/Inscription">Inscription</a>
          </div>
          <div className="NavBar-dropdown">
            <img src={profilePicture} alt="Logo profil" onClick={showDropdown}/>
            {displayDropdown ? 
              <div className="NavBar-dropdown-content">
                <a href="/Connexion">Connexion</a>
                <a href="/Inscription">Inscription</a>
              </div> : null
            }
          </div>
      </div>
    );
  }
  
  export default NavBar;
  