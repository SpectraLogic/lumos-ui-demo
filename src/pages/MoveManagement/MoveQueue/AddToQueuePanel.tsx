import { Button, Stack as StackBase, Paper as PaperBase, Typography as TypographyBase, TypographyProps, Zoom, ButtonGroup } from '@mui/material';
import { Storage, Computer, Input, ArrowRightAlt as ArrowIconBase, Add, QuestionMark, CheckCircle } from '@mui/icons-material'
import * as React from 'react';
import styled from 'styled-components';
import { ITapeSlot, SlotType } from '../../../interfaces/ITapeSlot';
import * as _ from 'lodash';
import { BaseTheme } from '../../../assets/theme';
import DeleteIcon from '@mui/icons-material/Delete';

interface IAddToQueuePanelProps {
    source?: ITapeSlot,
    destination?: ITapeSlot
    onConfirmAdd: () => void
    onDiscardAdd: () => void
}

const Root = styled( StackBase )<{ theme: BaseTheme }>`
    height: 153px;
    background-color: ${ ({theme}) => theme.colors.primaryMain };
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

const AddToQueueButton = styled( Button )<{ disabled: boolean }>`
    color: ${({ disabled }) => disabled ? '#fff !important' : '#000 !important' };
    opacity : ${ ({ disabled }) => disabled ? 0.25 : undefined };
    height: 40px;
`;

const SlotIcon: React.FunctionComponent<{ type?: "Drive" | "Storage" | "Entry/Exit" }> = ( {type} ) => {
    const props = { sx: { alignSelf: "center", color: '#979797' } };
    switch( type ){
        case "Storage":
            return <Storage { ...props } />
        case "Entry/Exit":
            return <Input { ...props } />
        case "Drive":
            return <Computer { ...props } />
        default: 
            return <QuestionMark { ...props } /> 
    }
}

const Typography = styled( TypographyBase )`
    align-self: center;
`;

const typographyProps: TypographyProps = { variant: 'caption' }

const AddToQueuePanel: React.FunctionComponent<IAddToQueuePanelProps> = ({ source, destination, onConfirmAdd, onDiscardAdd }) => {
  const selectionReady = !_.isUndefined( source ) && !_.isUndefined( destination );
return(
    <Root spacing={ 2 }>
        <Paper elevation={ selectionReady ? 3 : 0 }>
                    <>
                        <Stack>
                            <SlotIcon type={  source ? source!.type : undefined } />
                            <Typography { ...typographyProps }> 
                                { source ? `${source?.type}${ source?.number }` : 'Source' } 
                            </Typography>
                        </Stack>
                        <Stack>
                            {
                                source && (
                                <>
                                    <Typography { ...typographyProps }> 
                                        { source ? `${source.barcode}` : ` ` }
                                    </Typography>
                                    <ArrowIcon sx={{ color: '#979797' }}/>
                                </>
                                )
                            }

                        </Stack>
                        <Stack>
                            <SlotIcon type={ destination ? destination!.type : undefined } />
                            <Typography { ...typographyProps }> 
                                { destination ? `${destination.type }  ${ destination.number }` : 'Destination' } 
                            </Typography>
                        </Stack> 
                    </>

            {/* {
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
            } */}
        </Paper>
        <ButtonContainer>
            <ButtonGroup sx={{ width: '100%' }}>
                <AddToQueueButton 
                    fullWidth
                    color='secondary'
                    onClick={ onConfirmAdd }
                    disabled={ _.isUndefined( source )|| _.isUndefined( destination ) }
                    variant='contained'
                    endIcon={ <Add /> }> 
                        Add to Move Queue 
                </AddToQueueButton>
                <AddToQueueButton   
                    onClick={ onDiscardAdd }
                    variant='contained'
                    size='small'
                    color='error' 
                    disabled={  _.isUndefined( source )|| _.isUndefined( destination )  }>
                        <DeleteIcon />
                </AddToQueueButton>
            </ButtonGroup>
        </ButtonContainer>
    </Root>
  );
};

export default AddToQueuePanel;
