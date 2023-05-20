import "./MaterielCard.css";
import { StoreContext } from "../../store/store";
import { useContext, useState } from "react";

const  MaterielCard = ({card}) => {
    const { state, dispatch } = useContext(StoreContext);
    const classNames = `MaterielCard ${(state.selectedMaterials).has(card) ? 'selected' : 'not-selected'}`;

    
    let [myState, setMyState] = useState({
      set: state.selectedMaterials
    });

    const selectMateriel = function() {

      const updatedSet = state.selectedMaterials;
      if (myState.set.has(card)) {
        updatedSet.delete(card);
      } else {
        updatedSet.add(card);
      }
      state.selectedMaterials = updatedSet;
      setMyState({ set: updatedSet });

    }

    return (
      <div className={classNames} onClick={selectMateriel}>
        <div>
          <h1 className="MaterielCard-title">
          {card.nom}
          </h1>
        </div>
        <hr/>
        <div>
          <span >
          <ul>
            <li>{card.marque}</li>
            <li>{card.description}</li>
            <li>Prix : {card.prix}€</li>
            <li>Quantité restante : {card.quantite}</li>
          </ul>
          </span>
        </div>
          
        </div>
    );
  }
  
  export default MaterielCard;
  