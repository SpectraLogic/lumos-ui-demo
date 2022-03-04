import * as React from 'react';
import { Button, ButtonProps, Typography } from '@mui/material';
import styled from 'styled-components';
import { InnerSelection } from '../Navigator';
import { PartitionIcon, LifecycleIcon, NetworkIcon } from '../../Icons';

interface IListButtonProps extends ButtonProps {
    which: InnerSelection
    selection: InnerSelection
}

const StyledButton = styled(Button)<{selected: boolean}>`
    height: 40px;
    width: 100%;
    justify-content: left; 
    text-transform: none;
    font-weight: bold;
    box-shadow: none;
    background-color: ${ ({selected}) => selected ? '#000' : '#fff' };
    color: ${ ({selected}) => selected ? '#fff' : '#000' };
    &:hover{
        box-shadow: none;
    }
`;

//switch statement here?


const ListButton: React.FunctionComponent<IListButtonProps> = (props) => {
    const selected = props.selection === props.which;
  return (
    <StyledButton 
    { ...props }
    selected={ selected }
    startIcon={ <PartitionIcon htmlColor='#fff' /> }
    variant='contained'> 
        <Typography variant='body1'>
            Partitions
        </Typography>
    </StyledButton>
  ) ;
};

export default ListButton;
