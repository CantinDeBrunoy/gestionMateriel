import React, { useState, useEffect } from 'react';
import './Toaster.css';
import Danger from '../assets/images/exclamation.svg'
import Info from '../assets/images/information-button.svg'
import Success from '../assets/images/check.svg'
import Warning from '../assets/images/warning.svg'

const Toaster = ({ message, type, setShowToaster, taille }) => {
    const [className, setClassName] = useState('Toaster' + type);
    const [imgToaster, setImgToaster] = useState();

    useEffect(() => {
        if (type === "Success") {
            setImgToaster(Success);
        }
        else if (type === "Danger") {
            setImgToaster(Danger);
        }
        else if (type === "Warning") {
            setImgToaster(Warning);
        }
        else {
            setImgToaster(Info);
        }
        setTimeout(() => {
            setShowToaster(false);
        }, 6000);
    }, [type])


    return (
        <div className={`PopUp ${className} ${taille}`} >
            <img src={imgToaster} height='50px' />
            <span>{message}</span>
        </div >
    );
};

export default Toaster;
