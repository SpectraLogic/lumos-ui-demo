import { Queue, Send } from '@mui/icons-material';
import { Tab as TabBase, Tabs, Zoom } from '@mui/material';
import * as React from 'react';
import OverlapPanel from '../../../components/OverlapPanel/OverlapPanel';
import AddToQueuePanel from './AddToQueuePanel';
import { ITapeSlot } from '../../../interfaces/ITapeSlot';
import QueueTable from './QueueTable';
import { MoveStatus } from '../redux';
import  IssuedTable  from './IssuedTable';
import styled from 'styled-components';
import { BaseTheme } from '../../../assets/theme';

interface IMoveQueueProps {
    source?: ITapeSlot
    destination?: ITapeSlot
    onConfirmToQueue: () => void
    onSubmitQueue: () => void
    onDiscardQueue: () => void
    onDiscardCompleted: () => void
    onClearSelection: () => void
    onDiscardMove: ( move: Array<ITapeSlot> ) => void 
    stagedMoves: Array<Array<ITapeSlot>>
    issuedMoves: Array<Array<ITapeSlot>>
    concludedMoves: Array<Array<ITapeSlot>>
    moveStatus: { [barcode: string]: MoveStatus}
}

const Tab = styled( TabBase )<{ theme: BaseTheme, selected: boolean }>`
    background-color: ${ (props: { theme: BaseTheme }) => props.theme.colors.primaryMain };
    color: ${ ({ theme, selected }) =>  selected ? `${ theme.colors.secondaryMain }` : '#fff'  } !important;
`;

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
                    indicatorColor='secondary'
                    value={ tabValue } 
                    onChange={ (e, val) => setTabValue( val ) }
                    variant="fullWidth">
                        <Tab selected={ tabValue === 0 } label="Move Queue" icon={ <Queue /> } />
                        <Tab selected={ tabValue === 0 } label="Issued Moves" icon={ <Send /> } />
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
                onDiscardAdd={ () => {
                    props.onClearSelection();
                }}
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
