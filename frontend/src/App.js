import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';
import Accueil from './components/Accueil';
import NavBar from './components/NavBar';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Accueil/>
    },
    {
      path:"/connexion",
      element: <Connexion/>
    },
    {
      path:"/inscription",
      element: <Inscription/>
    }
  ])
  return (
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  );
}

export default App;
