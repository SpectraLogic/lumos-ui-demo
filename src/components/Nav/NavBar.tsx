import * as React from 'react';
import { AppBar, Container, Toolbar } from '@mui/material';
import SpectraLogo from '../../assets/sllogo.gif';
import styled from 'styled-components';

interface INavBarProps {
}

const AppBarLogo = styled.img`
  height: 60px;
`

const CustomAppBar = styled(AppBar)`
  background-color: #fff;
`
const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
  return(
    <CustomAppBar position='static'>
        <Container>
            <Toolbar disableGutters={ true }>
                <AppBarLogo src={ SpectraLogo } />
            </Toolbar>
        </Container>
    </CustomAppBar>
  );
};

export default NavBar;
