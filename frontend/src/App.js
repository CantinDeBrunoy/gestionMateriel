import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';
import Accueil from './components/Accueil';
import PageRecherche from './components/PageRecherche'
import Ticket from './components/Ticket';
import RechercheMateriel from './components/rechercheMateriel/RechercheMateriel';
import MenuAdmin from './components/menuAdmin/MenuAdmin';
import { createContext } from 'react';
import { StoreProvider } from "./store/store.js";

const MyContext = createContext();

function App() {
  const router = createBrowserRouter([
    {
      path:"",
      element: <Accueil/>
    },
    {
      path:"connexion",
      element: <Connexion/>
    },
    {
      path:"inscription",
      element: <Inscription/>
    },
    {
      path:"/rechercheMateriel",
      element:<PageRecherche/>
    },
    {
      path:"/ticket",
      element:<Ticket/>
    },
    {
      path:"/menuAdmin",
      element:<MenuAdmin/>
    }
  ])
  return (
    <React.StrictMode>
      <StoreProvider>
        <RouterProvider router={router}/>
      </StoreProvider>
    </React.StrictMode>
  );
}

export default App;
