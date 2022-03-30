import { Queue, Send } from '@mui/icons-material';
import { Tab, Tabs, Zoom } from '@mui/material';
import * as React from 'react';
import OverlapPanel from '../../../components/OverlapPanel/OverlapPanel';
import AddToQueuePanel from './AddToQueuePanel';
import { ITapeSlot } from '../../../interfaces/ITapeSlot';
import QueueTable from './QueueTable';
import { MoveStatus } from '../redux';
import  IssuedTable  from './IssuedTable';

interface IMoveQueueProps {
    source?: ITapeSlot
    destination?: ITapeSlot
    onConfirmToQueue: () => void
    onSubmitQueue: () => void
    onDiscardQueue: () => void
    onDiscardCompleted: () => void
    onDiscardMove: ( move: Array<ITapeSlot> ) => void 
    stagedMoves: Array<Array<ITapeSlot>>
    issuedMoves: Array<Array<ITapeSlot>>
    concludedMoves: Array<Array<ITapeSlot>>
    moveStatus: { [barcode: string]: MoveStatus}
}

const MoveQueue: React.FunctionComponent<IMoveQueueProps> = (props) => {
    const [tabValue, setTabValue] = React.useState( 0 );
  return(
    <OverlapPanel
        isOpen
        underSheetHeightPeek={ 183 }
        underSheetHeightTotal={ 183 }
        overSheetElement={ 
            <>
                <Tabs 
                    value={ tabValue } 
                    onChange={ (e, val) => setTabValue( val ) }
                    variant="fullWidth">
                        <Tab label="Move Queue" icon={ <Queue /> } />
                        <Tab label="Issued Moves" icon={ <Send /> } />
                </Tabs>
                    { tabValue === 0 && ( 
                        <QueueTable 
                            moves={ props.stagedMoves } 
                            onSubmit={ () => {
                                setTabValue( 1 );
                                props.onSubmitQueue()
                             } }
                            onDiscardMove={ props.onDiscardMove }
                            onDiscard={ props.onDiscardQueue  }/> 
                    ) }
                    {
                        tabValue === 1 && (
                            <IssuedTable 
                                onDiscard={ props.onDiscardCompleted }
                                completedMoves={ props.concludedMoves }
                                moves={[ ...props.concludedMoves, ...props.issuedMoves ]}
                                moveStatus={ props.moveStatus }/>
                    ) }
            </>
        }
        underSheetElement={ 
            <AddToQueuePanel
                source={ props.source }
                destination={ props.destination }
                onConfirmAdd={ () => { 
                    setTabValue( 0 );
                    props.onConfirmToQueue(); 
                } }
            />
        }
    />
  );
};

export default MoveQueue;
