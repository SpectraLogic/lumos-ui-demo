import { Button, Stack as StackBase, Paper as PaperBase, Typography as TypographyBase, TypographyProps, Zoom } from '@mui/material';
import { Storage, Computer, Input, ArrowRightAlt as ArrowIconBase, Add, QuestionMark, CheckCircle } from '@mui/icons-material'
import * as React from 'react';
import styled from 'styled-components';
import { ITapeSlot, SlotType } from '../../../interfaces/ITapeSlot';
import * as _ from 'lodash';

interface IAddToQueuePanelProps {
    source?: ITapeSlot,
    destination?: ITapeSlot
    onConfirmAdd: () => void
}

const Root = styled( StackBase )`
    height: 153px;
    background-color: #A68AF9;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 28px 18px 18px 18px;
`;

const Stack = styled( StackBase )`
    width: 33%;
`;

const Paper = styled( PaperBase )`
    height: 60px;
    width: 100%;
    background: #F0F0F0;
    border: 1px solid #2ECC71;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const ArrowIcon = styled( ArrowIconBase )`
    align-self: center;
    transform: scale(2);
`;

const ButtonContainer = styled.div`
    padding: 0 20px 0 20px;
`;

const SlotIcon: React.FunctionComponent<{ type: "Drive" | "Storage" | "Entry/Exit" }> = ( {type} ) => {
    const props = { sx: { alignSelf: "center", color: '#979797' } };
    switch( type ){
        case "Storage":
            return <Storage { ...props } />
        case "Entry/Exit":
            return <Input { ...props } />
        case "Drive":
            return <Computer { ...props } />
    }
}

const Typography = styled( TypographyBase )`
    align-self: center;
`;

const typographyProps: TypographyProps = { variant: 'caption' }

const AddToQueuePanel: React.FunctionComponent<IAddToQueuePanelProps> = ({ source, destination, onConfirmAdd }) => {
  const selectionReady = !_.isUndefined( source ) && !_.isUndefined( destination );
return(
    <Root spacing={ 2 }>
        <Paper elevation={ selectionReady ? 3 : 0 }>
            {
                selectionReady && (
                    <>
                        <Stack>
                            <SlotIcon type={ source!.type } />
                            <Typography { ...typographyProps }> 
                                { source?.type }&nbsp;{ source?.number }
                            </Typography>
                        </Stack>
                        <Stack>
                            <Typography { ...typographyProps }> 
                                { source.barcode }
                            </Typography>
                            <ArrowIcon sx={{ color: '#979797' }}/>
                        </Stack>
                        <Stack>
                            <SlotIcon type={ destination!.type } />
                            <Typography { ...typographyProps }> 
                                { destination.type }&nbsp;{ destination.number }
                            </Typography>
                        </Stack> 
                    </>
                 )
            }
            {
                !selectionReady && (
                    <>
                        <Stack>
                            <Zoom unmountOnExit in={ _.isUndefined( source ) }>
                                <QuestionMark  sx={{ alignSelf: "center", color: '#979797' }}/>
                            </Zoom>
                            <Zoom unmountOnExit in={ !_.isUndefined( source ) }>
                                <CheckCircle sx={{ alignSelf: "center", color: '#979797' }}/>
                            </Zoom>
                            <Typography { ...typographyProps }> 
                                    { _.isUndefined( source ) ? "Select Source" : "Source" }
                            </Typography>
                        </Stack>
                        <Stack>
                            <Zoom unmountOnExit in={ _.isUndefined( destination ) }>
                                <QuestionMark  sx={{ alignSelf: "center", color: '#979797' }}/>
                            </Zoom>
                            <Zoom unmountOnExit in={ !_.isUndefined( destination ) }>
                                <CheckCircle sx={{ alignSelf: "center", color: '#979797' }}/>
                            </Zoom>
                            <Typography { ...typographyProps }> 
                                    { _.isUndefined( destination ) ? "Select Destination" : "Destination" }
                            </Typography>
                        </Stack>
                    </>
                )
              
            }
        </Paper>
        <ButtonContainer>
            <Button 
                fullWidth
                color='success'
                onClick={ onConfirmAdd }
                disabled={ _.isUndefined( source )|| _.isUndefined( destination ) }
                variant='contained'
                endIcon={ <Add /> }> 
                    Add to Move Queue 
            </Button>
        </ButtonContainer>
    </Root>
  );
};

export default AddToQueuePanel;
