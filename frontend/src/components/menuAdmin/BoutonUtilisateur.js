import React, { useState } from 'react';
import './BoutonUtilisateur.css'
import bin from '../../assets/images/bin.svg'
import Toaster from '../Toaster';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";


const  BoutonUtilisateur = ({data}) => {
    const navigate = useNavigate();
    const [refreshPage,setRefreshPage]= useState(false);
    const changeStatus = async() => {
      if (data.role ==="utilisateur"){
        alert("t'as glow up");
        data.role = "admin";
      }
      else
      {
        alert("t'as glow down")
        data.role ="utilisateur";
      }
      const body = {
        id : data.id,
        role : data.role
      }
      await axios.post("http://127.0.0.1:4000/changeStatus", body);
      console.log(data);
      setRefreshPage(!refreshPage);
    }
    return (
    <div className='BoutonUtilisateur' key = {data.adresse_mail}>
      <button className='green' onClick={changeStatus}>Changer de status</button>
      <img src={bin} width="30px" />
    </div>)
  }
  
  export default BoutonUtilisateur;
  