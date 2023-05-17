import { DateFilterParams, NumberFilterParams, TextFilterParams } from "./aggridFilters";

export const defaultColDef = {
   resizable: true,
 };

export const rowTransactions =[
    { 
        headerName: 'Date de début',
        field: 'dateDebut',
        filter: 'agDateColumnFilter',
        filterParams: DateFilterParams,
        sortable: true,
        cellRenderer: (params) => {
        return (params.value ? formatCellRenderer(params) : '')
        },
     },
     { 
        headerName: 'Date de fin',
        field: 'dateFin',
        filter: 'agDateColumnFilter',
        filterParams: DateFilterParams,
        sortable: true,
        cellRenderer: (params) => {
        return (params.value ? formatCellRenderer(params) : '')
        },
     },
     { 
        headerName: 'Personne',
        field: 'personne',
        filter: 'agTextColumnFilter',
        filterParams: TextFilterParams,
        sortable: true,
        cellRenderer: (params) => {
        return (params.value ? formatCellRenderer(params) : '')
        },
     },
     { 
        headerName: 'Objet',
        field: 'objet',
        filter: 'agTextColumnFilter',
        filterParams: TextFilterParams,
        sortable: true,
        cellRenderer: (params) => {
        return (params.value ? formatCellRenderer(params) : '')
        },
     },
]

export const rowUsers = [
    { 
        headerName: 'Prenom',
        field: 'prenom',
        filter: 'agTextColumnFilter',
        filterParams: TextFilterParams,
        sortable: true,
        cellRenderer: (params) => {
        return (params.value ? formatCellRenderer(params) : '')
        },
     },
     { 
        headerName: 'E-Mail',
        field: 'mail',
        filter: 'agTextColumnFilter',
        filterParams: TextFilterParams,
        sortable: true,
        cellRenderer: (params) => {
        return (params.value ? formatCellRenderer(params) : '')
        },
     },
     { 
        headerName: 'Role',
        field: 'role',
        filter: 'agTextColumnFilter',
        filterParams: TextFilterParams,
        sortable: true,
        cellRenderer: (params) => {
        return (params.value ? formatCellRenderer(params) : '')
        },
     },
]

export const rowMateriel = [
    { 
        headerName: 'Nom',
        field: 'nom',
        filter: 'agTextColumnFilter',
        filterParams: TextFilterParams,
        sortable: true,
        cellRenderer: (params) => {
        return (params.value ? formatCellRenderer(params) : '')
        },
     },
     { 
        headerName: 'Prix',
        field: 'prix',
        filter: 'agNumberColumnFilter',
        filterParams: NumberFilterParams,
        sortable: true,
        cellRenderer: (params) => {
        return (params.value ? formatCellRenderer(params) : '')
        },
     },
     { 
        headerName: 'Stock',
        field: 'stock',
        filter: 'agTextColumnFilter',
        filterParams: TextFilterParams,
        sortable: true,
        cellRenderer: (params) => {
        return (params.value ? formatCellRenderer(params) : '')
        },
     },
     { 
        headerName: 'Famille',
        field: 'famille',
        filter: 'agTextColumnFilter',
        filterParams: TextFilterParams,
        sortable: true,
        cellRenderer: (params) => {
        return (params.value ? formatCellRenderer(params) : '')
        },
     },
]

const formatCellRenderer = (params) => (params.value ? params.value : '');

