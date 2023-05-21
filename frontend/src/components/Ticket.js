import { useState } from "react";
import RechercheMateriel from "./rechercheMateriel/RechercheMateriel";
import "./Ticket.css";
import * as React from "react";
import { StoreContext } from "../store/store";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Ticket() {
    const { state, dispatch } = React.useContext(StoreContext);
    const navigate = useNavigate();

    const [displayListMateriel, setDisplayListMateriel] = React.useState(false);
    const showListMateriel = () => setDisplayListMateriel(!displayListMateriel);

    const current = new Date();
    const actualDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const [mySet, setMySet] = useState(state.selectedMaterials);
    
    const sendTicket = async function() {
        const nom = document.getElementById("ticket-nom").value;
        const description = document.getElementById("ticket-description").value;
        const dateDebut = document.getElementById("date-debut").value;
        const dateFin = document.getElementById("date-fin").value;
        const materiels = state.selectedMaterials;

        if (!nom || !description || !dateDebut || !dateFin) {
            alert("Remplissez le formulare !");
            return;
        }

        if (dateDebut > dateFin) {
            alert("Dates incorrectes !");
            return;
        }

        if (materiels.size === 0) {
            alert("Sélectionnez le matériel à emprunter !");
            return;
        }

        const body = {
            nom: nom,
            description: description,
            dateDebut: dateDebut,
            dateFin: dateFin,
            userId: 1
        }

        const newPret = (await axios.post("http://localhost:3000/AjoutPret", body)).data.idPret;

        materiels.forEach(async (materiel) => {
            const idMateriel = materiel.id;
            const body = {
                idMateriel: idMateriel,
                idPret: newPret
            }
            await axios.post("http://localhost:3000/AjoutPretMateriel", body);
            await axios.post("http://localhost:3000/DecrementMateriel", body);
        })
        alert("Ticket créé !");
        navigate("/");
    };

    return (
        <div>
            <div className="Ticket">
                <h2>Réserver nos équipements</h2>
                <h3>Créer un ticket : </h3>
                <div className="Ticket-form">
                    <input id="ticket-nom" type="text" placeholder="Nom du ticket"/>
                    <textarea id="ticket-description" rows="5" cols="50"
                        placeholder="Description du ticket (ce que vous souhaitez faire avec le matériel)"/>
                    <div className="Ticket-date">
                        <span>Début de l'emprunt : </span>
                        <input id="date-debut" type="date" min={actualDate}/>
                        <br/>
                        <span>Fin de l'emprunt : </span>
                        <input id="date-fin" type="date" min={actualDate}/>
                    </div>
                    <button onClick={showListMateriel} className="Ticket-show-materiel orange">Choisir ce que j'emprunte</button>
                    <button className="ButtonForm green Ticket-submit" onClick={sendTicket}>Envoyer</button>
                </div>
                {displayListMateriel ? 
                    <div className="Ticket-materiel">
                        <h3>Le matériel que j'emprunte : </h3>
                        <RechercheMateriel />
                    </div> : null
                }
            </div>
        </div>
    )
}

export default Ticket;