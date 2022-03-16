import * as React from 'react';
import { IconButton, TextField, Typography, Zoom } from '@mui/material';
import { ModeEdit } from '@mui/icons-material';
import styled from 'styled-components';

interface INameProps {
    value: string
    onValueChange: ( value: string ) => void
    editState?: boolean
}

const Root = styled.div`
    display: flex;
     gap: 10px;
`;

const EditModeButton = styled( IconButton )`
    padding: 0;
`;

const Name: React.FunctionComponent<INameProps> = (props) => {
    const [editState, setEditState] = React.useState( props.editState || false );
    return (
        <>
            <Zoom in={ editState } unmountOnExit >
                <TextField label="Partition Name" value={ props.value } onChange={ (e) => props.onValueChange( e.target.value ) } /> 
            </Zoom>
            <Zoom in={ !editState } appear={ false } exit={ false } >
                <Root>
                    <Typography variant='h4' >
                        { props.value }
                    </Typography>
                    <EditModeButton onClick={ setEditState.bind( undefined, !editState ) } >
                        <ModeEdit />
                    </EditModeButton>
                </Root>
            </Zoom>
        </>
    )
};

export default Name;
