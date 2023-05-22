import "./MenuAdmin.css"
import {useEffect, useState } from "react";
import TableauAgGrid from "./TableauAgGrid.js";
import { rowMateriel, rowTransactions, rowUsers } from "../../assets/constantes/rowDefs";
import Statistiques from "./Statistiques";
import NavBar from '../navBar/NavBar';
import axios from "axios";


const MenuAdmin = () => {
    const [listTransaction, setlistTransaction] = useState([]);
    const [activePage, setActivePage] = useState([]);
    const formatdate = function (dateString){
      const dateJS = new Date(dateString);
      var jour = dateJS.getDate();
      var mois = dateJS.getMonth() + 1; // Les mois commencent à 0, donc on ajoute 1
      var annee = dateJS.getFullYear();

      // Ajout des zéros initiaux si nécessaire
      if (jour < 10) {
        jour = '0' + jour;
      }

      if (mois < 10) {
        mois = '0' + mois;
      }
      
      // Conversion en format "dd/mm/yyyy"
      var dateConvertie = jour + '/' + mois + '/' + annee;
      return dateConvertie;
  }
    useEffect(() => {
      const fetchData = async () => {
        try {
          const utilisateur = (await axios.get("http://localhost:4000/getUtilisateurs")).data;
          const utilisateursFiltres = utilisateur.map(({ id,prenom, nom, adresse_mail, role}) => ({
            id : id,
            prenom: prenom,
            nom: nom,
            mail: adresse_mail,
            role: role,
          }));
  
          const materiel = (await axios.get("http://localhost:4000/getMateriels")).data;
          const materielFiltre = materiel.map(({ nom, prix, quantite,marque }) => ({
            nom: nom,
            prix: prix,
            stock: quantite,
            famille:marque
          }));
          let Transaction =(await axios.get("http://localhost:4000/getPretTicket")).data
          
          Transaction.forEach((element) => {
            console.log(element)
            element.date_debut = formatdate(element.date_debut);
            element.date_fin = formatdate(element.date_fin);
          })
          const TransactionFiltré = Transaction.map(({id,date_debut,date_fin,nom,description,adresse_mail}) => ({
            id: id,
            date_debut: date_debut,
            date_fin: date_fin,
            nom: nom,
            description : description,
            adresse_mail:adresse_mail
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
            },
            {
              id:3,
              title:'Statistiques',
              isActive:false,
              data:[],
              columnDefs:rowUsers,
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