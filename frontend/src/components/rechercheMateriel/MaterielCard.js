import "./MaterielCard.css";

const  MaterielCard = ({card}) => {

  console.log(card);
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
            <li>Marque :{card.marque ? card.marque :' marque inconnue'} </li>
            <li>Description :{card.description ? card.description :' aucune description'}</li>
            <li>Prix : {card.prix ? card.prix :' prix inconnu'}€</li>
            <li>Quantité restante : {card.quantite ? card.quantite :' quantité restante inconnue'}</li>
          </ul>
          </span>
        </div>
          
        </div>
    );
  }
  
  export default MaterielCard;
  