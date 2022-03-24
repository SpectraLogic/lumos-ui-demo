
import * as React from 'react';
import { DataGrid as DataGridBase, GridColDef } from '@mui/x-data-grid';
import { slots } from '../../assets/mock-data';
import * as _ from 'lodash';
import styled from 'styled-components';
import { ITapeSlot } from '../../interfaces/ITapeSlot';

interface ISlotTableProps {
    slots: Array<ITapeSlot>
    selectionType: "source" | "destination"
}

const DataGrid = styled( DataGridBase )`
    & .MuiDataGrid-footerContainer {
        display: none;
    }
`;

const sourceColumns: Array<GridColDef> = [
    { field: 'type', headerName: 'Type'},
    { field: 'number', headerName: 'Number' },
    { field: 'barcode', headerName: 'Barcode', flex: 1 },
    { field: 'location', headerName: 'Location' }
];

const destinationColumns: Array<GridColDef> = [
    { field: 'type', headerName: 'Type', flex: 1},
    { field: 'number', headerName: 'Number' },
    { field: 'location', headerName: 'Location' }
];

const SlotTable: React.FunctionComponent<ISlotTableProps> = (props) => {
  return (
      <DataGrid
        columns={ props.selectionType === "source" ? sourceColumns : destinationColumns }
        rows={ props.slots }/>
  );
};

export default SlotTable;
