import React, { useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import './TableauAgGrid.css'

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { localText } from '../../assets/constantes/localText';
import { defaultColDef } from '../../assets/constantes/rowDefs';
import Button from './ButtonHistorique';
import BoutonUtilisateur from './BoutonUtilisateur';
// import BoutonDeleteUtilisateur from './BoutonDeleteUtilisateur';

const  TableauAgGrid = ({page}) => {
    
  const gridRef = useRef();

  const handleGridColumnsChanged = () => sizeToFit();

  const handleOnGridReady = () => sizeToFit();

  const onFilterTextChange = (e) => {
    gridRef.current.api.setQuickFilter(e.target.value);
  };

  const sizeToFit = () => gridRef.current.api.sizeColumnsToFit();

    return (
      <div className="TableauAgGrid">
        <div className="TableauAgGrid-navBar-filter">
          <input className="TableauAgGrid-navBar-input" onChange={onFilterTextChange} placeholder="Recherche Rapide" />
        </div>
        <div style={{ height: '47em' }} className="ag-theme-alpine">
          <AgGridReact
            ref={gridRef}
            defaultColDef={defaultColDef}
            enableCellTextSelection={true}
            rowData={page.data}
            onGridReady={handleOnGridReady}
            onGridColumnsChanged={handleGridColumnsChanged}
            animateRows={true}
            columnDefs={page.columnDefs}
            localeText={localText}
            suppressHorizontalScroll={true}
            frameworkComponents={{
              btnCellRenderer:Button,
              btnCellRendererUtilsateur:BoutonUtilisateur,
              btnCellRendererDeleteUtilisateur:Button,
            }}
            overlayLoadingTemplate={'<span class="ag-overlay-loading-center">Chargement des données...</span>'}
            overlayNoRowsTemplate={'<span class="ag-overlay-loading-center">Pas de données</span>'}
          ></AgGridReact>
        </div>
      </div>
    );
  }
  
  export default TableauAgGrid;