import * as React from 'react';
import styled from 'styled-components';
import { BaseTheme } from '../../../assets/theme';
import SpectraLogo from '../../../assets/sllogo-dark.gif';
import { InnerSelection } from '../Nav';
import { Typography } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';



interface INavSheetProps {
    isOpen: boolean
    onOpenToggle: () => void
    location: InnerSelection
}

const Root = styled.div<{ theme: BaseTheme }>`
    display: flex;
    height: 100%;
    background-color: ${ ({ theme }) => theme.colors.primaryMain };
`;

const AppBarLogo = styled.img`
  width: 145px;
`

const Toolbar = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    padding: 10px 10px 10px 10px;
    align-items: center;
    :hover{
        cursor: pointer;
    }
`

const LocationContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX( -50% );
    & h5{
        color: #fff;
    }
`;

const ChevronContainer = styled.div`
    margin-left: auto;
    & svg{
        color: #fff;
        scale: 1.5;
    }

`;

const NavSheet: React.FunctionComponent<INavSheetProps> = (props) => {
  return(
      <Root>
        <Toolbar onClick={ props.onOpenToggle }>
            <AppBarLogo src={ SpectraLogo } />
            <LocationContainer>
                <Typography variant='h5'> { props.location } </Typography>
            </LocationContainer>
            <ChevronContainer>
                { props.isOpen ? <ExpandLess /> : <ExpandMore /> }
            </ChevronContainer>
        </Toolbar>
      </Root>
  );
};

export default NavSheet;
