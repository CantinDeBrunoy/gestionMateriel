import { useNavigate } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
  const navigate = useNavigate();

  const navigateToOtherPage=(route) => {
    console.log(route);
    navigate(route);
  }
  return (
      <div className="NavBar">
          <button className="NavBar-Titre" onClick={()=>navigateToOtherPage('')}>Le Mauvais Coin</button>
          <button>Connexion</button>
          <button>Inscription</button>
      </div>
    );
  }
  
  export default NavBar;
  