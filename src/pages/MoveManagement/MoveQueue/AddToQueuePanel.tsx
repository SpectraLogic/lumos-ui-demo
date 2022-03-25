import { Button } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';
import { ITapeSlot } from '../../../interfaces/ITapeSlot';

interface IAddToQueuePanelProps {
    source?: ITapeSlot,
    destination?: ITapeSlot
    onConfirmAdd: () => void
}

const Root = styled.div`
    height: 143px;
    width: 100%;
    background-color: #A68AF9 ;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
`;


const AddToQueuePanel: React.FunctionComponent<IAddToQueuePanelProps> = ({ source, destination, onConfirmAdd }) => {
  return(
    <Root>
        { source?.barcode }
        <br/>
        { destination?.type } &nbsp; { destination?.number }
        <br/>
        <Button onClick={ onConfirmAdd }>Add to Queue</Button>
    </Root>
  );
};

export default AddToQueuePanel;
