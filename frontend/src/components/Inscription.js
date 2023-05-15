import "./Inscription.css";

function Inscription() {
  return (
  <div className="Inscrpition">
    <h2>Nom de l'appli</h2>
    <h3>Je créé mon compte : </h3>
    <div className="Inscription-form">
        <span>Nom</span>
        <input type="text" className="InputText" name="nom"/>
        <span>Prenom</span>
        <input type="text" className="InputText" name="prenom"/>
        <span>Adresse mail</span>
        <input type="text" className="InputText" name="mail"/>
        <span>Mot de passe</span>
        <input type="text" className="InputText" name="mdp"/>
        <span>Confirmer le mot de passe</span>
        <input type="checkbox" className="InputCheckbox"/> Afficher les mots de passe
        <input type="text" className="InputText" name="confirm_mdp"/>
        <button className="ButtonForm green">Valider</button>
    </div>
  </div>
  );
}

export default Inscription;
