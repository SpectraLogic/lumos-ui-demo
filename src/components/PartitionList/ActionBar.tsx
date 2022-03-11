import * as React from 'react';
import styled from 'styled-components';
import { Fab } from '@mui/material'
import { PartitionAddIcon } from '../Icons'
import { motion } from 'framer-motion';
 

interface IActionBarProps {
}

const Root = styled.div`
    position: relative;
    height: 56px;
    width: 100%;
`;

const AppBarBackgroundItem = styled.div`
    height: 56px;
    background: #263238;
`;

const Background = styled.div`
    display: flex; 
    flex-direction: row;
    height: 56px;
    width: 100%;
    align-items: flex-end;
`

const BackgroundLeft = styled( AppBarBackgroundItem )`
    border-bottom-left-radius: 16px;
    border-top-right-radius: 3px;
    flex-grow: 1;
`;

const BackgroundMiddle = styled.div`
    position: relative;
    overflow: hidden;
    width: 72px;
    height: 54px;
    &:before{
        content:'';
        position:absolute;
        bottom:50%;
        width: 100%;
        height:100%;
        border-radius:100%;
        box-shadow: 0px 300px 0px 300px #263238;
    }
`;

const BackgroundRight = styled ( AppBarBackgroundItem)`
    width: 14px;
    border-top-left-radius: 3px;
    border-bottom-right-radius: 16px;
`;

const StyledFab = styled( Fab )`
    position: absolute; 
    right: 22px;
    bottom: 36px;
    background: #A68AF9;
    &:hover{
        background: #916DFB;
    }
`;

const StyledPartitionAddIcon = styled( PartitionAddIcon )`
    color: #fff;
    transform: scale( 1.5 );
`;

const ActionBar: React.FunctionComponent<IActionBarProps> = (props) => {
  return(
      
    <Root { ...props }>
        <Background>
            <BackgroundLeft />
            <BackgroundMiddle />
            <BackgroundRight />
        </Background>
        <StyledFab>
            <StyledPartitionAddIcon 
                viewBox='0 0 40 40' 
                height={ 40 } width={ 40 } />
        </StyledFab>
    </Root>
  );
};

export default ActionBar;
