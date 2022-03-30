
import * as React from 'react';
import { DataGrid as DataGridBase, GridColDef } from '@mui/x-data-grid';
import * as _ from 'lodash';
import styled from 'styled-components';
import { ITapeSlot } from '../../../interfaces/ITapeSlot';

interface ISlotTableProps {
    slots: Array<ITapeSlot>
    selectionType: "source" | "destination"
    onSlotSelect: ( slot: ITapeSlot ) => void
}

const DataGrid = styled( DataGridBase )`
    // border-radius: 8px 8px 16px 16px;
    & .MuiDataGrid-footerContainer {
        display: none;
    }

    & ::-webkit-scrollbar {
        border-radius: 0px 0px 16px 0px;
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
        { ...props }
        columns={ props.selectionType === "source" ? sourceColumns : destinationColumns }
        rows={ props.slots }
        onRowClick={ ({ row }) => props.onSlotSelect( row as ITapeSlot ) }
        />
  );
};

export default SlotTable;
