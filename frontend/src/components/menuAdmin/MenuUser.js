import "./MenuAdmin.css"
import {useEffect, useState } from "react";
import TableauAgGrid from "./TableauAgGrid.js";
import { rowMateriel, rowTransactions, rowTransactionsUsers, rowUsers } from "../../assets/constantes/rowDefs";
import Statistiques from "./Statistiques";
import NavBar from '../navBar/NavBar';
import axios from "axios";
import { StoreContext } from "../../store/store.js";
import { useContext } from "react";

const MenuUser = () => {
    const [listTransaction, setlistTransaction] = useState([]);
    const [activePage, setActivePage] = useState([]);
    const { state, dispatch } = useContext(StoreContext);
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
          let Transaction =(await axios.get("http://localhost:4000/getPretTicket")).data
          Transaction.forEach((element) => {
            console.log(element)
            element.date_debut = formatdate(element.date_debut);
            element.date_fin = formatdate(element.date_fin);
          })
          const TransactionFiltréMail = Transaction.filter(transaction => transaction.adresse_mail === state.currentUserName);
          const TransactionFiltréFinal = TransactionFiltréMail.map(({ id,date_debut,date_fin,nom,description }) => ({
            id: id,
            date_debut: formatdate(date_debut),
            date_fin: formatdate(date_fin),
            nom: nom,
            description : description
          }));
          const updatedActivePage = [
            {
              id: 0,
              title: 'Historique transactions',
              isActive: true,
              data: TransactionFiltréFinal,
              columnDefs: rowTransactionsUsers,
            },
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
        </div>
    );
}
export default MenuUser;