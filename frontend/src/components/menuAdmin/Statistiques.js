import "./Statistiques.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Statistiques = () => {
  const [NombreUsers, setNombreUsers] = useState([]);
  const [NombreAdmin, setNombrAdmin] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const nombre = (await axios.get("http://localhost:4000/getUsersNumber")).data;
        setNombreUsers(nombre[0].user_count);
      } catch (error) {
        console.log(error);
      }
      try {
        const nombre = (await axios.get("http://localhost:4000/getAdminsNumber")).data;
        setNombrAdmin(nombre[0].user_count);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: ['Utilisateur','Admin'],
    datasets: [
      {
        label: '# of Votes',
        
        data: [NombreUsers,NombreAdmin], // Use the fetched transaction data here
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="Statistiques">
      <div className="Statistiques-PieChart">
        <span>Répartition des rôles</span>
        <Pie data={data} />
      </div>
    </div>
  );
};

export default Statistiques;