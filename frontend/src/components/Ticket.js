import { useState } from "react";
import RechercheMateriel from "./rechercheMateriel/RechercheMateriel";
import "./Ticket.css";
import * as React from "react";
import NavBar from '../components/navBar/NavBar'

function Ticket() {
    const [displayListMateriel, setDisplayListMateriel] = React.useState(false);
    const showListMateriel = () => setDisplayListMateriel(!displayListMateriel);

    const current = new Date();
    const actualDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const [listItems,setListItems] = useState([
        'aaaa','aaa','ab','abc','aabc','dsqdsq','dsqd','dsqdsq','trqsdqs','tfdqs'
    ])

    return (
        <div>
            <NavBar />
            <div className="Ticket">
                <h2>Réserver nos équipements</h2>
                <h3>Créer un ticket : </h3>
                <div className="Ticket-form">
                    <input type="text" placeholder="Nom du ticket"/>
                    <textarea rows="5" cols="50"
                        placeholder="Description du ticket (ce que vous souhaitez faire avec le matériel)"/>
                    <div className="Ticket-date">
                        <span>Début de l'emprunt : </span>
                        <input type="date" min={actualDate}/>
                        <br/>
                        <span>Fin de l'emprunt : </span>
                        <input type="date" min={actualDate}/>
                    </div>
                    <button onClick={showListMateriel} className="Ticket-show-materiel orange">Choisir ce que j'emprunte</button>
                    <span>/*Afficher nom des items slectionné ici*/</span>
                    <button className="ButtonForm green Ticket-submit">Envoyer</button>
                </div>
                {displayListMateriel ? 
                    <div className="Ticket-materiel">
                        <h3>Le matériel que j'emprunte : </h3>
                        <RechercheMateriel listItems={listItems}/>
                    </div> : null
                }
            </div>
        </div>
    )
}

export default Ticket;