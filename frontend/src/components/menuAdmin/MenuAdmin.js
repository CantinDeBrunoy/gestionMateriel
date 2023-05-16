import "./MenuAdmin.css"
import NavBar from "../navBar/NavBar";
import { useState } from "react";
import HistoriqueTransactions from "./HistoriqueTransactions";
import GestionMateriel from "./GestionMateriel";
import GestionUtilisateurs from "./GestionUtlisateurs";

const  MenuAdmin = () => {
    const [activePage,setActivePage] = useState([
        {
            title:'Historique transactions',
            isActive:true,
            component:<HistoriqueTransactions/>
        },
        {
            title:'Gestion matériel',
            isActive:false,
            component:<GestionMateriel/>
        },
        {
            title:'Gestion utilisateurs',
            isActive:false,
            component:<GestionUtilisateurs/>
        }
    ]);

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
          <NavBar/>
          <div className="MenuAdmin-navBar dark-blue">
            {
                activePage.map((page)=><a key={page.title} onClick={() => onClickSubNavBar(page)} className={page.isActive ? 'MenuAdmin-navBar-span-isActive': ''}>{page.title}</a>)
            }

            
          </div>
          {activePage.map((page)=> {
            if(page.isActive)
                return page.component
            })}
        </div>
    );
  }
  
  export default MenuAdmin;
  