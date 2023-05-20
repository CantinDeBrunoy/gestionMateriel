import "./RechercheMateriel.css";
import { useEffect, useState } from "react";
import MaterielCard from "./MaterielCard";
import search from "../../assets/images/search-outline.svg";
import axios from "axios";
import NavBar from '../navBar/NavBar';


const RechercheMateriel = () => {
    const [listItems,setListItems] = useState([]);
    const [valueFiltered,setValueFiltered] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const items = (await axios.get("http://localhost:4000/getMateriels")).data;
                setListItems(items);
                setValueFiltered(items);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    },[])

    const setNewValueFiltered = (e) => {
        const filteredList = listItems.filter((item) => item.nom.toLowerCase().indexOf((e.target.value).toLowerCase()) !== -1);
        setValueFiltered(filteredList);
    }

  return (
    <div className="rechercheMateriel">
  <div className="rechercheMateriel-div-header dark-blue">
      <span>Filtre 1</span>
      <span>Filtre 2</span>
      <div className="rechercheMateriel-div-input">
      <input  onChange={setNewValueFiltered} placeholder="Je cherche un matériel, un objet..."/>
      <button className="rechercheMateriel-div-button">
      <img src={search} />
      </button>
      </div>
      
  </div>
  <div className="rechercheMateriel-listItems">
  {valueFiltered && valueFiltered.map((obj)=><MaterielCard key={obj.nom} card={obj.nom} />)}
  </div>
  </div>
  );
};

export default RechercheMateriel;