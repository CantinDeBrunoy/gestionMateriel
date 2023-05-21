import "./MenuAdmin.css"
import {useEffect, useState } from "react";
import TableauAgGrid from "./TableauAgGrid.js.js";
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
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          let Transaction =(await axios.get("http://localhost:4000/getTransaction")).data
          Transaction = Transaction.filter(transaction => transaction.adresse_mail === state.currentUserName);
          Transaction = Transaction.map(({ date_debut,date_fin,nom }) => ({
            date_debut: date_debut,
            date_fin: date_fin,
            nom: nom
          }));
          const updatedActivePage = [
            {
              id: 0,
              title: 'Historique transactions',
              isActive: true,
              data: Transaction,
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