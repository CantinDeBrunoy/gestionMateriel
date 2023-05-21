import "./MenuAdmin.css"
import {useEffect, useState } from "react";
import TableauAgGrid from "./TableauAgGrid.js.js";
import { rowMateriel, rowTransactions, rowUsers } from "../../assets/constantes/rowDefs";
import Statistiques from "./Statistiques";
import NavBar from '../navBar/NavBar';
import axios from "axios";


const MenuAdmin = () => {
    const [listTransaction, setlistTransaction] = useState([]);
    const [activePage, setActivePage] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const utilisateur = (await axios.get("http://localhost:4000/getUtilisateurs")).data;
          const utilisateursFiltres = utilisateur.map(({ nom, adresse_mail, role }) => ({
            prenom: nom,
            mail: adresse_mail,
            role: role
          }));
  
          const materiel = (await axios.get("http://localhost:4000/getMateriels")).data;
          const materielFiltre = materiel.map(({ nom, prix, quantité,marque }) => ({
            nom: nom,
            prix: prix,
            stock: quantité,
            famille:marque
          }));
          const Transaction =(await axios.get("http://localhost:4000/getTransaction")).data
          console.log(Transaction);
          const TransactionFiltré = Transaction.map(({ date_debut,date_fin,nom,adresse_mail }) => ({
            date_debut: date_debut,
            date_fin: date_fin,
            nom: nom,
            prenom:adresse_mail
          }));
          const updatedActivePage = [
            {
              id: 0,
              title: 'Historique transactions',
              isActive: true,
              data: TransactionFiltré,
              columnDefs: rowTransactions,
            },
            {
              id: 1,
              title: 'Gestion matériel',
              isActive: false,
              data: materielFiltre,
              columnDefs: rowMateriel,
            },
            {
              id: 2,
              title: 'Gestion utilisateurs',
              isActive: false,
              data: utilisateursFiltres, // Utilisez la valeur mise à jour de listUtilisateur
              columnDefs: rowUsers,
            }
          ];
  
          setActivePage(updatedActivePage);
        } catch (err) {
          // Gérer l'erreur
        }
      };
      fetchData();
    }, []);


    const onClickSubNavBar = (pageActive) => {
        
        const newActivePage = activePage.map((page)=>{
            if(page.title === pageActive.title){
                page.isActive = true;
            }
            else{
                page.isActive = false;
            }
            return page;
        });
        setActivePage(newActivePage);
    }

    return (
      <div className="MenuAdmin">
        <NavBar />
          <div className="MenuAdmin-navBar dark-blue">
            {
                activePage.map((page)=><a key={page.title} onClick={() => onClickSubNavBar(page)} className={page.isActive ? 'MenuAdmin-navBar-span-isActive': ''}>{page.title}</a>)
            }

            
          </div>

          {/* C Crado dsl les mecs si vous avez le temps à refactor*/}
          {activePage.map((page)=> {
            if(page.isActive && page.id!=3){
                return <TableauAgGrid page={page}/>
            }
            })}

        {activePage.map((page)=> {
            if(page.isActive && page.id==3){
                return <Statistiques page={page}/>
            }
            })}
        </div>
    );
}
export default MenuAdmin;