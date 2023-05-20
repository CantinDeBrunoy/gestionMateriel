import "./MenuAdmin.css"
import { useState } from "react";
import TableauAgGrid from "./TableauAgGrid.js";
import { rowMateriel, rowTransactions, rowUsers } from "../../assets/constantes/rowDefs";
import Statistiques from "./Statistiques";

const  MenuAdmin = () => {
    const [activePage,setActivePage] = useState([
        {
            id:0,
            title:'Historique transactions',
            isActive:true,
            data:[
                {dateDebut: "19/12/2020", dateFin: "21/01/2021", personne: 'Maxime',objet:'a'},
                {dateDebut: "18/03/2022", dateFin: "31/05/2022", personne: 'François',objet:'b'},
                {dateDebut: "29/01/2023", dateFin: "01/02/2023", personne: 'Antoine',objet:'c'}
            ],
            columnDefs: rowTransactions,
        },
        {
            id:1,
            title:'Gestion matériel',
            isActive:false,
            data:[
                {nom:'banane',prix:'10',stock:'90',famille:'autre'},
                {nom:'telephone',prix:'1000',stock:'1',famille:'technologie'},
                {nom:'briques',prix:'5',stock:'1000',famille:'BTP'},
            ],
            columnDefs:rowMateriel,
        },
        {
            id:2,
            title:'Gestion utilisateurs',
            isActive:false,
            data:[
                {prenom:'Yani',mail:'YaniMaster@gmail.com',role:'admin'},
                {prenom:'Benji',mail:'BenjiShyvana@gmail.com',role:'admin'},
                {prenom:'Luc',mail:'LucEpaules@gmail.com',role:'user'},
                {prenom:'LisaLover',mail:'pédale@gmail.com',role:'user'},
                {prenom:'Cantin',mail:'kfc@gmail.com',role:'admin'},
            ],
            columnDefs:rowUsers,
        }
        ,
        {
            id:3,
            title:'Statistiques',
            isActive:false,
            data:[],
            columnDefs:rowUsers,
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
  