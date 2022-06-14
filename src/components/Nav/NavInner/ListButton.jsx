import * as React from 'react';
import { Button, ButtonProps, selectClasses, SvgIconProps, Typography } from '@mui/material';
import styled from 'styled-components';
import { InnerSelection } from '../Nav';
import { PartitionIcon, LifecycleIcon, NetworkIcon, UsersIcon, UpdateIcon, DesktopIcon, ArrowsVerticalIcon, ArrowsLateralIcon, ServerEncryptIcon } from '../../Icons';
import { Link, LinkProps, useMatch, useResolvedPath, To } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
// interface IListButtonProps extends ButtonProps {
//     which: InnerSelection
//     selection: InnerSelection,
//     to: To
// }

// const StyledButton = styled(Button)<{selected: boolean}>`
const StyledButton = styled(Button)`
    height: 60px;
    width: 100%;
    justify-content: center; 
    text-transform: none;
    font-weight: bold;
    box-shadow: none;
    // background-color: ${ ({selected}) => selected ? undefined : '#fff' };
    color: '#fff';
    background-color: ${ ({selected, theme}) => selected ? theme.colors.secondaryMain : undefined };
    &:hover{
        box-shadow: none;
        background-color: ${ ({selected}) => selected ? undefined : undefined };
    }
`;

// const ButtonIcon: React.FunctionComponent<{ selected: boolean, which: InnerSelection}> = (props) =>{
const ButtonIcon = (props) =>{
    // const iconProps =  { htmlColor: props.selected ? '#89ED5B' : '#fff' };
    const iconProps = { 
        htmlColor: '#fff',
        tranform: 'translateY(5px)'
    };

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
            return ( <ServerEncryptIcon { ...iconProps } />);
        case InnerSelection.Dashboard:
            return ( <DashboardIcon { ...iconProps } /> );
        case InnerSelection.SystemMessages:
            return ( <NotificationsNoneIcon { ...iconProps } /> );
        case InnerSelection.RoboticsStatus:
            return ( <PrecisionManufacturingIcon { ...iconProps } /> );
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
