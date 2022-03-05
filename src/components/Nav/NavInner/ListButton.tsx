import * as React from 'react';
import { Button, ButtonProps, selectClasses, SvgIconProps, Typography } from '@mui/material';
import styled from 'styled-components';
import { InnerSelection } from '../Navigator';
import { PartitionIcon, LifecycleIcon, NetworkIcon, UsersIcon, UpdateIcon, DesktopIcon, ArrowsVerticalIcon, ArrowsLateralIcon, ServerEncryptIcon } from '../../Icons';

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
        background-color: ${ ({selected}) => selected ? '#000' : '#fff' };
    }
`;

const ButtonIcon: React.FunctionComponent<{ selected: boolean, which: InnerSelection}> = (props) =>{
    const iconProps: SvgIconProps =  { htmlColor: props.selected ? '#fff' : '#000' } ;
    switch( props.which ){
        case InnerSelection.Partitions: 
            return ( <PartitionIcon { ...iconProps } />  );
        case InnerSelection.MediaLifecycle:
            return ( <LifecycleIcon { ...iconProps } />);
        case InnerSelection.NetworkSettings:
            return ( <NetworkIcon  { ...iconProps } />)
        case InnerSelection.UserAccounts:
            return ( <UsersIcon { ...iconProps } />);
        case InnerSelection.Updates:
            return ( <UpdateIcon { ...iconProps } />);
        case InnerSelection.ManageDrives:
            return ( <DesktopIcon { ...iconProps } />);
        case InnerSelection.ImportExport: 
            return ( <ArrowsVerticalIcon { ...iconProps } /> );
        case InnerSelection.MoveMedia: 
            return ( <ArrowsLateralIcon { ...iconProps } /> );
        case InnerSelection.MediaEncryption: 
            return ( <ServerEncryptIcon { ...iconProps } />)
        default: 
            return ( <> </> )
    }
}
    
const ListButton: React.FunctionComponent<IListButtonProps> = (props) => {
    const selected = props.selection === props.which;
  return (
    <StyledButton 
    { ...props }
    selected={ selected }
    startIcon={ <ButtonIcon which={ props.which } selected={ selected } /> }
    variant='contained'> 
        <Typography variant='body1'>
            { props.which }
        </Typography>
    </StyledButton>
    
  ) ;
};

export default ListButton;
