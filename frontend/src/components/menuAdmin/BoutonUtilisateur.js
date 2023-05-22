import React from 'react';
import './BoutonUtilisateur.css'
import bin from '../../assets/images/bin.svg'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";


const  BoutonUtilisateur = ({data,params,value},props) => {
    const navigate = useNavigate();
    const navigateToTicket = () => {
      navigate('/ticket');
    };
    const body = {
      id : data.id,
      role : data.role
    }

    const changeStatus = async() => {
      if (data.role ==="utilisateur"){
        data.role = "admin";
      }
      else
      {
        data.role ="utilisateur";
      }
      const response = (await axios.post("http://127.0.0.1:4000/changeStatus", body)).data;
      console.log(response)
      navigate('/ticket');
      setTimeout(() => navigate('/MenuAdmin'),1);
    }
    const DeleteUser = async() => {
      await axios.post("http://127.0.0.1:4000/DeleteUser", body);
      navigate('/ticket');
      setTimeout(() => navigate('/MenuAdmin'),1);
    }
    return (
    <div className='BoutonUtilisateur' key = {data.adresse_mail}>
      <button className='green' onClick={() => {
  changeStatus();
}}>Changer de statut</button>
      <img src={bin} width="30px" onClick={DeleteUser} />
    </div>)
  }
  
  export default BoutonUtilisateur;
  