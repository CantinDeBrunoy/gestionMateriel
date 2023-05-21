import "./MaterielCard.css";

const  MaterielCard = ({card}) => {
    return (
      <div className="MaterielCard">
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
  