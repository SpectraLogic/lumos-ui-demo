import * as React from 'react';
import { ITapeSlot } from '../../../interfaces/ITapeSlot';
import { DataGrid as DataGridBase, GridColDef } from '@mui/x-data-grid';
import { Button, ButtonGroup as ButtonGroupBase, styled } from '@mui/material';

interface IQueueTableProps {
    moves: Array<Array<ITapeSlot>>
    onSubmit: () => void
    onDiscard: () => void
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
    { field: 'destination', headerName: 'Destination', flex: 2 }
];

const generateTableData = ( moves: Array<Array<ITapeSlot>> ) => {
    return moves.map( move => {
        const [source, destination] = move;
        return {
            id: source.barcode,
            source: `${ source.type } ${ source.number }`,
            destination: `${ destination.type } ${ destination.number }`
        }
    } )
}


const QueueTable: React.FunctionComponent<IQueueTableProps> = (props) => {
    const tableData = React.useMemo( () => generateTableData( props.moves ), [ props.moves ] )
  return(
    <>
        <DataGrid
            columns={ columns }
            rows={ tableData }
        />
        <ButtonGroup fullWidth variant='contained' disabled={ props.moves.length <= 0 }>
            <Button color='error' onClick={ props.onDiscard }>Discard Queue</Button>
            <Button color='success' onClick={ props.onSubmit }>Submit Queue</Button>
        </ButtonGroup>
    </>
  );
};

export default QueueTable;
