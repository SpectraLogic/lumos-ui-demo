import * as React from 'react';
import { AppBar, Container, Toolbar } from '@mui/material';
import SpectraLogo from '../../assets/sllogo_black.png';
import styled from 'styled-components';

interface INavBarProps {
}

const AppBarLogo = styled.img`
  height: 45px;
`

const CustomAppBar = styled(AppBar)`
  background-color: #fff;
  padding-left: 17px;
  height: 72px;
`
const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
  return(
    <CustomAppBar position='static'>
            <Toolbar disableGutters={ true }>
                <AppBarLogo src={ SpectraLogo } />
            </Toolbar>
    </CustomAppBar>
  );
};

export default NavBar;
