import React, { useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';
import { defaultColDef } from '../../variables/variables';
import { localText } from '../../common/constants';

const MercalysGrid = () => {
  const gridRef = useRef();

  const handleGridColumnsChanged = () => sizeToFit();

  const getRowStyle = (params) => {
    if (params.data.cloture === false) {
      return { background: '#d8fbd8' };
    }
  };

  const handleOnGridReady = () => sizeToFit();

  const onFilterTextChange = (e) => {
    gridRef.current.api.setQuickFilter(e.target.value);
  };

  const sizeToFit = () => gridRef.current.api.sizeColumnsToFit();

  const { data, columnDefs } = useOutletContext();

  return (
    <div className="MercalysGrid">
      <div className="Mercalys-navBar-filter">
        <input className="Mercalys-navBar-input" onChange={onFilterTextChange} placeholder="Recherche Rapide" />
      </div>
      <div style={{ height: '47em' }} className="ag-theme-alpine">
        <AgGridReact
          ref={gridRef}
          defaultColDef={defaultColDef}
          enableCellTextSelection={true}
          rowData={data}
          onGridReady={handleOnGridReady}
          onGridColumnsChanged={handleGridColumnsChanged}
          animateRows={true}
          getRowStyle={getRowStyle}
          columnDefs={columnDefs}
          localeText={localText}
          suppressHorizontalScroll={true}
          overlayLoadingTemplate={'<span class="ag-overlay-loading-center">Chargement des données...</span>'}
          overlayNoRowsTemplate={'<span class="ag-overlay-loading-center">Pas de données</span>'}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default MercalysGrid;
