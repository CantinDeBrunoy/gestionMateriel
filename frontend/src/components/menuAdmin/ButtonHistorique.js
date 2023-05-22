import React, { useState } from 'react';
import './BoutonUtilisateur.css'
import bin from '../../assets/images/bin.svg'
import Toaster from '../Toaster';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";



const  ButtonHistorique = ({data}) => {
    const navigate = useNavigate();
    const body ={
      id : data.id
    }

    const DeletePretMateriel = async() => {
      await axios.post("http://127.0.0.1:4000/DeletePretMateriel", body);
      navigate('/ticket');
      setTimeout(() => navigate('/MenuAdmin'),1);
    }
    return (
    <div className='ButtonHistorique' onClick= {DeletePretMateriel} key = {data.date_fin}>
      <img src={bin} width="30px" />
    </div>)
  }
  
  export default ButtonHistorique;
  