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
            <li><span className = "rowTitle">Marque :</span> {card.marque ? card.marque :' marque inconnue'} </li>
            <li><span className = "rowTitle">Description :</span> {card.description ? card.description :' aucune description'}</li>
            <li><span className = "rowTitle">Prix :</span> {card.prix ? card.prix :' prix inconnu'}€</li>
            <li><span className = "rowTitle">Quantité restante :</span> {card.quantite ? card.quantite :' quantité restante inconnue'}</li>
          </ul>
          </span>
        </div>
          
        </div>
    );
  }
  
  export default MaterielCard;
  