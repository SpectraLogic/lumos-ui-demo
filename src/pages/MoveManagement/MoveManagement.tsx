import * as React from 'react';
import IPartition from '../../interfaces/IPartition';
import styled from 'styled-components';
import { Button as ButtonBase, Grid, Stack, Typography } from '@mui/material';
import PartitionsList from '../../components/PartitionList/ParitionsList';
import { Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { PartitionIcon as PartitionIconBase } from '../../components/Icons';
import  SlotSelection from './SlotSelection/SlotSelection';
import { slots } from '../../assets/mock-data';
import { ITapeSlot } from '../../interfaces/ITapeSlot';
import MoveQueue from './MoveQueue/MoveQueue';
import { Actions, IMoveMgmtState, MoveStatus, reducer } from './redux';
import * as _ from 'lodash'
import { random } from 'lodash';
import { AnimatePresence, motion, Variants } from 'framer-motion';


interface IMoveManagementProps {
    partitions: Array<IPartition>
}

const Root = styled( motion.div )`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: #f0f0f0;
`;

const Background = styled( motion(Grid) )`
  width: 100%;
  position: relative;
  padding: 10px;
  flex-grow: 1;
`;

const SelectPartition = styled( Stack )`
    position: absolute;
    align-item: center;
    width: 100%;
    top: 50%;
    transform: translateY( -50% );
`;

const SelectPartitionContainer = styled.div`
    height: 100%;
    position: relative;
`;

const PartitionIcon = styled( PartitionIconBase )`
    height: 240px;
    width: 240px;
    transform: scale(1);
    color: #979797;
    align-self: center;
    transform: translateX( 45px );
`;

const Button = motion( ButtonBase );

const PanelContainer = styled.div`
    height: calc( 100% - 40.5px );
`;

const rootVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: { type: 'tween', duration: 0.33 }
    }
}; 

const MoveManagement: React.FunctionComponent<IMoveManagementProps> = ({ partitions }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [state, dispatch] = React.useReducer( reducer, {
        sourceSlots: slots.filter( iter => !_.isUndefined( iter.barcode ) ),
        destinationSlots: slots.filter( iter => _.isUndefined( iter.barcode ) ),
        stagedMoves: [],
        issuedMoves: [],
        concludedMoves: [],
        moveStatus: {}
    } );

    React.useEffect( () => {
        if( state.issuedMoves.length < 1 ) return ;
        setTimeout( () => {
            const completionState = Math.random() > 0.20 ? MoveStatus.Success : MoveStatus.Fail;
            dispatch({ type: Actions.MOVE_COMPLETE, payload: { barcode: state.issuedMoves[0][0].barcode!, status: completionState } })
        }, Math.random() * (12000 - 8000) + 8000 );
    }, [ state.issuedMoves ] )

    const [initial, setInital] = React.useState<boolean | object>( false );

    React.useEffect( () => {
        setInital({ opacity: 0 })
    }, [] )

  return(
      <Root
      variants={ rootVariants }
      initial={ false }
      animate='visible'
      exit='exit'>
        <AnimatePresence exitBeforeEnter>
            <Routes location={ location } key={ location.pathname }>
                <Route index element={
                    <Background container spacing={ 1 }
                    initial={ initial }
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'tween', duration: 0.33 }}>
                        <Grid item xs={ 3 } sx={{ maxHeight: '100%' }}>
                            <PartitionsList
                                partitions={ partitions }
                            />
                            </Grid>
                        <Grid item xs={ 9 } sx={{ maxHeight: '100%' }}>
                            <SelectPartitionContainer>
                                <SelectPartition spacing={ 2 } >
                                    <Typography sx={{ alignSelf: "center", color: "#979797" }} variant='h2'>
                                        Select Partition
                                    </Typography>
                                    <PartitionIcon />
                                </SelectPartition> 
                            </SelectPartitionContainer>
                        </Grid>    
                    </Background>  
                }/>
                {
                    partitions.map( partition => (
                        <Route
                            key={ partition.id }
                            path={ `/${ partition.id }/*` }
                            element={
                                <>
                                    <Background container spacing={ 1 }
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ type: 'tween', duration: 0.5 }}>     
                                        <Grid item xs={ 4 }>
                                            <Typography variant='h4' sx={{ textAlign: 'center' }}>
                                                Source
                                            </Typography>
                                            <PanelContainer>
                                                <SlotSelection 
                                                    selectionType='source'
                                                    slots={ state.sourceSlots }
                                                    onSlotSelect={ ( slot ) => dispatch({ type: Actions.SET_SOURCE, payload: slot }) }
                                                />
                                            </PanelContainer>
                                        </Grid>
                                        <Grid item xs={ 4 }>
                                            <Typography variant='h4' sx={{ textAlign: 'center' }}>
                                                Destination
                                            </Typography>
                                            <PanelContainer>
                                                <SlotSelection 
                                                    selectionType='destination'
                                                    slots={ state.destinationSlots }
                                                    onSlotSelect={ ( slot ) => dispatch({ type: Actions.SET_DESTINATION, payload: slot }) }
                                                />
                                            </PanelContainer>
                                        </Grid>
                                        <Grid item xs={ 4 }>
                                            <Typography variant='h4' sx={{ textAlign: 'center' }}>
                                                Moves
                                            </Typography>
                                            <PanelContainer>
                                                <MoveQueue 
                                                    stagedMoves={ state.stagedMoves }
                                                    issuedMoves={ state.issuedMoves }
                                                    moveStatus={ state.moveStatus }
                                                    concludedMoves={ state.concludedMoves }
                                                    source={ state.source }
                                                    destination={ state.destination }
                                                    onConfirmToQueue={ dispatch.bind( undefined, { type: Actions.ADD_MOVE_TO_QUEUE } ) }
                                                    onSubmitQueue={ () => {
                                                        dispatch({ type: Actions.SUBMIT_QUEUE } ) 
                                                    } }
                                                    onDiscardMove={ ( move: Array<ITapeSlot> ) => dispatch({ type: Actions.DISCARD_MOVE, payload: move }) }
                                                    onDiscardQueue={ dispatch.bind( undefined, { type: Actions.DISCARD_QUEUE } ) }
                                                    onDiscardCompleted={ dispatch.bind( undefined, { type: Actions.DISCARD_COMPLETED } ) }
                                                />
                                            </PanelContainer>
                                        </Grid>
                                    </Background>
                                    <Button 
                                    fullWidth 
                                    color='info'
                                    onClick={ () => navigate( '../Move-Media' ) }
                                    variant='contained'
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ type: 'tween', duration: 0.33 }}> 
                                        Go Back
                                    </Button>
                                </>
                            }
                        />
                    ) )
                }    
            </Routes>
        </AnimatePresence>
        <Outlet/>
      </Root>

  );
};

export default MoveManagement;
