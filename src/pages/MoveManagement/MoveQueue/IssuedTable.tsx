import * as React from 'react';
import { ITapeSlot } from '../../../interfaces/ITapeSlot';
import { DataGrid as DataGridBase, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Button, ButtonGroup as ButtonGroupBase, styled } from '@mui/material';
import { MoveStatus } from '../redux';
import { PendingActions, Cached as CachedBase, Report, CheckCircle } from '@mui/icons-material';
import { motion } from 'framer-motion';

interface IIssuedTableProps {
    moves: Array<Array<ITapeSlot>>
    moveStatus: { [barcode: string]: MoveStatus }
    completedMoves: Array<Array<ITapeSlot>>
    onDiscard: () => void
}

const DataGrid = styled( DataGridBase )`
    height: calc( 100% - 72px - 39px );
    & .MuiDataGrid-footerContainer{
        display: none;
    }
`;

const ButtonGroup = styled( ButtonGroupBase )`
    border-radius: 0 0 8px 8px;
    & button {
        border-radius: 0 0 8px 8px;
    }
`;

const Cached = motion( CachedBase );

const columns: Array<GridColDef> = [
    { field: 'id', headerName: 'Barcode', flex: 3},
    { field: 'source', headerName: 'Source', flex: 2 },
    { field: 'destination', headerName: 'Destination', flex: 2 },
    { field: 'status', headerName: '', width: 50,renderCell: ( params: GridRenderCellParams<MoveStatus> ) => {
        switch( params.value ){
            case MoveStatus.Pending:
                return <PendingActions />
            case MoveStatus.InProgress:
                return <Cached  animate={{ rotate: -360 }} transition={{ repeat: Infinity, repeatDelay: 0, duration: 3 }}/>
            case MoveStatus.Fail:
                return <Report color='error' />
            case MoveStatus.Success: 
                return <CheckCircle color='success' />
            default:
                throw "Something other than MoveStatus has been supplied"
        }
    } }
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
  return(
    <>
        <DataGrid
            columns={ columns }
            rows={ tableData }
        />
        <ButtonGroup fullWidth variant='contained' disabled={ props.completedMoves.length < 1 }>
            <Button onClick={ props.onDiscard } color='info'>Dismiss Completed Moves</Button>
        </ButtonGroup>
    </>
  );
};

export default IssuedTable;
