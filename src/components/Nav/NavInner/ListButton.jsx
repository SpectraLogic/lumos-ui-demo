import * as React from 'react';
import { Button, ButtonProps, selectClasses, SvgIconProps, Typography } from '@mui/material';
import styled from 'styled-components';
import { InnerSelection } from '../Nav';
import { PartitionIcon, LifecycleIcon, NetworkIcon, UsersIcon, UpdateIcon, DesktopIcon, ArrowsVerticalIcon, ArrowsLateralIcon, ServerEncryptIcon } from '../../Icons';
import { Link, LinkProps, useMatch, useResolvedPath, To } from 'react-router-dom';

// interface IListButtonProps extends ButtonProps {
//     which: InnerSelection
//     selection: InnerSelection,
//     to: To
// }

// const StyledButton = styled(Button)<{selected: boolean}>`
const StyledButton = styled(Button)`
    height: 60px;
    width: 100%;
    justify-content: left; 
    text-transform: none;
    font-weight: bold;
    box-shadow: none;
    // background-color: ${ ({selected}) => selected ? undefined : '#fff' };
    color: ${ ({selected}) => selected ? '#89ED5B' : '#fff' };
    &:hover{
        box-shadow: none;
        background-color: ${ ({selected}) => selected ? undefined : undefined };
    }
`;

// const ButtonIcon: React.FunctionComponent<{ selected: boolean, which: InnerSelection}> = (props) =>{
const ButtonIcon = (props) =>{
    const iconProps =  { htmlColor: props.selected ? '#89ED5B' : '#fff' };

    // const iconProps: SvgIconProps =  { htmlColor: props.selected ? '#fff' : '#000' } ;
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

// function CustomButton<C extends React.ElementType>(
//     props: ButtonProps<C, { component?: C }>
// ) {
//     return (
//         <Button 
//     )
// }
    
// const ListButton: React.FunctionComponent<IListButtonProps> = (props) => {
const ListButton = (props) => {
    let resolved = useResolvedPath(props.to);
    let match = useMatch({ path: resolved.pathname, end: false });
  return (
        <StyledButton
        to={ props.to }
        component={ Link }
        { ...props }
        // color={ match ? 'pri' : undefined }
        color='primary'
        selected={ match ? true : false }
        startIcon={ <ButtonIcon which={ props.which } selected={ match ? true : false } /> }
        variant='contained'> 
            <Typography variant='body1'>
                { props.which.replace('-', ' ') }
            </Typography>
        </StyledButton>
    
  ) ;
};

export default ListButton;
