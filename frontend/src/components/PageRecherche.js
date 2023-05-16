import NavBar from "./navBar/NavBar";
import { useState } from "react";
import RechercheMateriel from "./rechercheMateriel/RechercheMateriel";

function PageRecherche() {
    const [listItems,setListItems] = useState([
        'aaaa','aaa','ab','abc','aabc','dsqdsq','dsqd','dsqdsq','trqsdqs','tfdqs'
    ])

    return (
        <div>
            <NavBar/>
            <RechercheMateriel listItems={listItems}/>
        </div>
    )
}

export default PageRecherche;