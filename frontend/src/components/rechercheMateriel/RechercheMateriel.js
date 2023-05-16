// import "./RechercheMateriel.css"
// import NavBar from "../navBar/NavBar";
// import { useEffect, useState } from "react";
// import MaterielCard from "./MaterielCard";
// import search from "../../assets/images/search-outline.svg"

// const  RechercheMateriel = () => {
//     const [listItems,setListItems] = useState([
//         'aaaa','aaa','ab','abc','aabc','dsqdsq','dsqd','dsqdsq','trqsdqs','tfdqs'
//     ])
//     const [valueFiltered,setValueFiltered] = useState([
//         'aaaa','aaa','ab','abc','aabc','dsqdsq','dsqd','dsqdsq','trqsdqs','tfdqs'
//     ]);



//     const setNewValueFiltered = (e) => {
//         const filteredList = listItems.filter((items)=>items.includes(e.target.value));
//         setValueFiltered(filteredList);
//     }

//     return (
//       <div className="rechercheMateriel">
//           <NavBar/>
//         <div className="rechercheMateriel-div-header dark-blue">
//             <span>Filtre 1</span>
//             <span>Filtre 2</span>
//             <div className="rechercheMateriel-div-input">
//             <input  onChange={setNewValueFiltered} placeholder="Je cherche un matériel, un objet..."/>
//             <button className="rechercheMateriel-div-button">
//             <img src={search} />
//             </button>
//             </div>
            
//         </div>
//         <div className="rechercheMateriel-listItems">
//         {valueFiltered && valueFiltered.map((obj)=><MaterielCard key={obj} card={obj} />)}
//         </div>
//         </div>
//     );
//   }
  
//   export default RechercheMateriel;
  

import React, { useState } from "react";
import "./RechercheMateriel.css";
import MaterielCard from "./MaterielCard";
import search from "../../assets/images/search-outline.svg";

const RechercheMateriel = ({ listItems }) => {
  const [valueFiltered, setValueFiltered] = useState([...listItems]);

  const setNewValueFiltered = (e) => {
    const filteredList = listItems.filter((items) =>
      items.includes(e.target.value)
    );
    setValueFiltered(filteredList);
  };

  return (
    <div className="rechercheMateriel">
      <div className="rechercheMateriel-div-header dark-blue">
        <span>Filtre 1</span>
        <span>Filtre 2</span>
        <div className="rechercheMateriel-div-input">
          <input
            onChange={setNewValueFiltered}
            placeholder="Je cherche un matériel, un objet..."
          />
          <button className="rechercheMateriel-div-button">
            <img src={search} />
          </button>
        </div>
      </div>
      <div className="rechercheMateriel-listItems">
        {valueFiltered &&
          valueFiltered.map((obj) => <MaterielCard key={obj} card={obj} />)}
      </div>
    </div>
  );
};

export default RechercheMateriel;