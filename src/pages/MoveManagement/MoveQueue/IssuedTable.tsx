import * as React from 'react';
import { ITapeSlot } from '../../../interfaces/ITapeSlot';
import { DataGrid as DataGridBase, GridColDef } from '@mui/x-data-grid';
import { Button, ButtonGroup as ButtonGroupBase, styled } from '@mui/material';
import { MoveStatus } from '../redux';

interface IIssuedTableProps {
    moves: Array<Array<ITapeSlot>>
    moveStatus: { [barcode: string]: MoveStatus }
    // onSubmit: () => void
    // onDiscard: () => void
}

const DataGrid = styled( DataGridBase )`
    height: calc( 100% - 72px - 36.5px );
    & .MuiDataGrid-footerContainer{
        display: none;
    }
`;

const ButtonGroup = styled( ButtonGroupBase )`
    border-radius: 0 0 16px 16px;
    & button {
        border-radius: 0 0 16px 16px;
    }
`;

const columns: Array<GridColDef> = [
    { field: 'id', headerName: 'Barcode', flex: 3},
    { field: 'source', headerName: 'Source', flex: 2 },
    { field: 'destination', headerName: 'Destination', flex: 2 },
    { field: 'status', headerName: 'Status' }
];

const generateTableData = ( moves: Array<Array<ITapeSlot>>, statuses: { [barcode: string]: MoveStatus } ) => {
    return moves.map( move => {
        const [source, destination] = move;
        const status = statuses[source.barcode!];
        return {
            id: source.barcode,
            source: `${ source.type } ${ source.number }`,
            destination: `${ destination.type } ${ destination.number }`,
            status: status
        }
    } )
}


const IssuedTable: React.FunctionComponent<IIssuedTableProps> = (props) => {
    const tableData = React.useMemo( () => generateTableData( props.moves, props.moveStatus ), [ props.moves ] )
    const [completeMoves, setCompleteMoves] = React.useState( [] as Array<Array<ITapeSlot>> );
  return(
    <>
        <DataGrid
            columns={ columns }
            rows={ tableData }
        />
        <ButtonGroup fullWidth variant='contained' disabled={ completeMoves.length <= 0 }>
            <Button color='info'>Dismiss Completed Moves</Button>
        </ButtonGroup>
    </>
  );
};

export default IssuedTable;
