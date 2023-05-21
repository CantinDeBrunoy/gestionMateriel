import React from 'react';
import './BoutonUtilisateur.css'
import bin from '../../assets/images/bin.svg'



const  BoutonUtilisateur = () => {
    
    return (
    <div className='BoutonUtilisateur'>
      <button className='green'>Changer de status</button>
      <img src={bin} width="30px" />
    </div>)
  }
  
  export default BoutonUtilisateur;
  