import { useState } from "react";
import RechercheMateriel from "./rechercheMateriel/RechercheMateriel";
import "./Ticket.css";
import * as React from "react";
import { StoreContext } from "../store/store";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import NavBar from '../components/navBar/NavBar'
import Toaster from "./Toaster";


function Ticket() {
    const { state, dispatch } = React.useContext(StoreContext);
    const navigate = useNavigate();

    const [displayListMateriel, setDisplayListMateriel] = React.useState(false);
    const showListMateriel = () => setDisplayListMateriel(!displayListMateriel);
    const [showToaster,setShowToaster] = useState(false);
    const [infoToaster,setInfoToaster] = useState({
        message:'Ticket envoyé',
        setShowToaster,
        type:'Success',
        taille:'petit'
      });
    const ref = React.useRef(null);
    const doClick = () => ref.current?.scrollIntoView({behavior: 'smooth'});

    const [materielSelected, setMaterielSelected] = React.useState([]);

    const current = new Date();
    const actualDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const [mySet, setMySet] = useState(state.selectedMaterials);
    
    const sendTicket = async function() {
   
        const nom = document.getElementById("ticket-nom").value;
        const description = document.getElementById("ticket-description").value;
        const dateDebut = document.getElementById("date-debut").value;
        const dateFin = document.getElementById("date-fin").value;
        const materiels = materielSelected;

        if (!nom || !description || !dateDebut || !dateFin) {
            alert("Remplissez le formulare !");
            return;
        }

        if (dateDebut > dateFin) {
            alert("Dates incorrectes !");
            return;
        }

        if (materiels.length===0) {
            alert("Sélectionnez le matériel à emprunter !");
            return;
        }

        const body = {
            nom: nom,
            description: description,
            dateDebut: dateDebut,
            dateFin: dateFin,
            userId: state.currentUserId
        }

        const newPret = (await axios.post("http://localhost:4000/AjoutPret", body)).data.idPret;

        materiels.forEach(async (materiel) => {
            const idMateriel = materiel.id;
            const body = {
                idMateriel: idMateriel,
                idPret: newPret
            }
            await axios.post("http://localhost:4000/AjoutPretMateriel", body);
        })
        
        setShowToaster(true);
        setTimeout(() => {
            navigate("/");
        }, 3000);
    };

    return (
        <div>
            <NavBar />
            <div className="Ticket">
                {showToaster && <Toaster message={infoToaster.message} setShowToaster={infoToaster.setShowToaster} type={infoToaster.type} taille={infoToaster.taille}/>}
                <h2>Réserver nos équipements</h2>
                
                <div className="Ticket-form">
                <h3>Créer un ticket  </h3>
                <div className="Ticket-form-section">
                    <span>Nom du ticket </span>
                    <input type="text" id="ticket-nom" className="Ticket-InputText" placeholder="Nom du ticket"/>
                </div>
                <div className="Ticket-form-section">
                    <span>Description du ticket :</span>
                    <textarea rows="5" cols="50" id="ticket-description" className="Ticket-InputText"
                        placeholder="Description du ticket (ce que vous souhaitez faire avec le matériel)"/>
                </div>
                <div className="Ticket-form-section Ticket-date">
                    <span>De  </span>
                    <input type="date" id="date-debut" min={actualDate}/>
                    <br/>
                    <span>A  </span>
                    <input type="date" id="date-fin" min={actualDate}/>
                </div>
                    <button onClick={doClick} className="Ticket-show-materiel green">Choisir ce que j'emprunte</button>
                    <div className="Ticket-form-list-materiel-selected">
                        {materielSelected.map((materiel)=><span>•{materiel.nom}</span>)}
                    </div>
                    <button onClick={sendTicket} className="ButtonForm green Ticket-submit">Envoyer</button>
                </div>
                <div className="Ticket-form-section" ref={ref}>
                    <RechercheMateriel  setMaterielSelected={setMaterielSelected} materielSelected={materielSelected} />
                </div>
            </div>
        </div>
    )
}

export default Ticket;