
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import './TableauAgGrid.css'

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const  TableauAgGrid = ({page}) => {
    console.log(page);

    return (
      <div className="TableauAgGrid">
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
  
  export default TableauAgGrid;
  