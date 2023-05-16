import NavBar from "./navBar/NavBar";
import "./Ticket.css";

function Ticket() {
    return (
        <div>
            <NavBar/>
            <div className="Ticket">
                <h2>Réserver nos équipements</h2>
                <h3>Créer un ticket : </h3>
                <div className="Ticket-form">
                    <input type="text" placeholder="Nom du ticket"/>
                    <textarea rows="5" cols="50"
                        placeholder="Description du ticket (ce que vous souhaitez faire avec le matériel)"/>
                    <div className="Ticket-date">
                        <span>Début de l'emprunt : </span>
                        <input type="date"/>
                        <br/>
                        <span>Fin de l'emprunt : </span>
                        <input type="date"/>
                    </div>
                </div>
                <button>Envoyer</button>
            </div>
        </div>
    )
}

export default Ticket;