import * as React from 'react';
import NavBar from './NavBar';
import Navigator from './Navigator';
import styled from 'styled-components';

interface INavProps {
}

const NavWrapper = styled.div`
    height: 100vh;
    width: 100vw;
`;

const Nav: React.FunctionComponent<INavProps> = (props) => {
  return(
      <NavWrapper>
        <NavBar/>
        <Navigator />
        {props.children}
      </NavWrapper>
  );
};

export default Nav;
