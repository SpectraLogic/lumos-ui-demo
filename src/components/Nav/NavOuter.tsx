import * as React from 'react';
import styled from 'styled-components';
import { Build } from '@mui/icons-material';
import { Typography } from '@mui/material';

interface INavOuterProps {
}

const Background = styled.div`
    width: 100px;
    height: 100%;
    background-color: #f0f0f0;
    padding-top: 8px;
`;


//make item component here, style component
const Item = styled.div<{selected: boolean}>`
    margin-top: 8px;
    height: 80px;
    width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const ItemIcon = styled.div`
    align-self: center;
    margin-bottom: 4px;
`;

const NavOuter: React.FunctionComponent<INavOuterProps> = (props) => {
  return (
    <Background> 
        <Item selected={ false }>
            <ItemIcon>
                <Build />
            </ItemIcon>
            <Typography
                align='center'
                variant='caption'
                >
                    Operations
            </Typography>
        </Item>
    </Background>
  );
};

export default NavOuter;
