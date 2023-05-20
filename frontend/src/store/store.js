import React, { createContext, useReducer } from 'react';

// Créez un contexte pour votre store
export const StoreContext = createContext();

// Définissez votre état initial
const initialState = {
  // Définissez les propriétés initiales de votre store ici
  // Exemple :
  connected: false,
  currentUserName: "",
  currentUserRole: "",
};

// Définissez un réducteur pour gérer les actions et mettre à jour l'état du store
const reducer = (state, action) => {
  switch (action.type) {
    // Gérez les différentes actions ici

  }
};

// Créez un composant Provider pour envelopper votre application avec le store
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};