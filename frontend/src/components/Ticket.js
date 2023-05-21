import { useState } from "react";
import RechercheMateriel from "./rechercheMateriel/RechercheMateriel";
import "./Ticket.css";
import * as React from "react";

import NavBar from '../components/navBar/NavBar'
import Toaster from "./Toaster";


function Ticket() {
    const [showToaster,setShowToaster] = useState(false);
    const ref = React.useRef(null);
    const doClick = () => ref.current?.scrollIntoView({behavior: 'smooth'});

    const [materielSelected, setMaterielSelected] = React.useState([]);

    const current = new Date();
    const actualDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const [listItems,setListItems] = useState([
        'aaaa','aaa','ab','abc','aabc','dsqdsq','dsqd','dsqdsq','trqsdqs','tfdqs'
    ]);

    const submitForm = () =>{
        setShowToaster(true);
    }


    return (
        <div>
            <NavBar />
            <div className="Ticket">
                {showToaster && <Toaster message='Ticket envoyé' setShowToaster={setShowToaster} type='Success' taille='petit'/>}
                <h2>Réserver nos équipements</h2>
                
                <div className="Ticket-form">
                <h3>Créer un ticket  </h3>
                <div className="Ticket-form-section">
                    <span>Nom du ticket </span>
                    <input type="text" placeholder="Nom du ticket"/>
                </div>
                <div className="Ticket-form-section">
                    <span>Description du ticket :</span>
                    <textarea rows="5" cols="50"
                        placeholder="Description du ticket (ce que vous souhaitez faire avec le matériel)"/>
                </div>
                <div className="Ticket-form-section Ticket-date">
                    <span>De  </span>
                    <input type="date" min={actualDate}/>
                    <br/>
                    <span>A  </span>
                    <input type="date" min={actualDate}/>
                </div>
                    <button onClick={doClick} className="Ticket-show-materiel green">Choisir ce que j'emprunte</button>
                    <div className="Ticket-form-list-materiel-selected">
                        {materielSelected.map((materiel)=><span>•{materiel.nom}</span>)}
                    </div>
                    <button onClick={submitForm} className="ButtonForm green Ticket-submit">Envoyer</button>
                </div>
                <div className="Ticket-form-section" ref={ref}>
                    <RechercheMateriel  setMaterielSelected={setMaterielSelected} materielSelected={materielSelected} listItems={listItems}/>
                </div>
            </div>
        </div>
    )
}

export default Ticket;