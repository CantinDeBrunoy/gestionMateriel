import "./MaterielCard.css"

const  MaterielCard = ({card}) => {
    console.log(card);

    return (
      <div className="MaterielCard ">
        <div>
          <h1 className="MaterielCard-title">
          {card}
          </h1>
        </div>
        <hr/>
        <div>
          <span >
          Adduxit poenales atque catenis enim eculei coopertos deiectos enim deiectos paene et uncosque paene parabat tenus tormenta quemquam paene gladii tenus gladii nec in ex castra tenus sceleste reversusque proscripti enim patratis Paulus meminit parabat ex is meminit absolutum castra.
          </span>
        </div>
          
        </div>
    );
  }
  
  export default MaterielCard;
  