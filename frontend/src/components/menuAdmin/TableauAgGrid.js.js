
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { rowTransactions } from '../../assets/constantes/rowDefs';

const  HistoriqueTransactions = ({page}) => {
    console.log(page);
const rowData = [];
    return (
      <div className="HistoriqueTransactions">
        HistoriqueTransactions
        <input/>
        <div className="ag-theme-alpine" style={{height: 400, width: 1000}}>
            <AgGridReact
               rowData={page.data}
               columnDefs={page.columnDefs}>
           </AgGridReact>
       </div>
        </div>
    );
  }
  
  export default HistoriqueTransactions;
  