import * as React from 'react';
import styled from 'styled-components';
import { BuildOutlined, InfoOutlined, SettingsApplicationsOutlined } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { OuterSelection } from './Nav';

interface INavOuterProps {
    selection: OuterSelection
    onSelectionChange: ( selection: OuterSelection ) => void
}

const Background = styled.div`
    width: 100px;
    height: 100%;
    background-color: #fff;
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
    &:hover{
        cursor: ${ ({selected}) => selected ? "default" : "pointer"};
    }
    background-color: ${ ({selected}) => selected ? "#f0f0f0" : "#fff" }
`

const ItemIcon = styled.div`
    align-self: center;
    margin-bottom: 4px;
`;

const NavOuter: React.FunctionComponent<INavOuterProps> = (props) => {
  return (
    <Background> 
        <Item 
            selected={ props.selection === OuterSelection.LibraryStatus } 
            onClick={ props.onSelectionChange.bind( undefined, OuterSelection.LibraryStatus ) }
            >
            <ItemIcon>
                <InfoOutlined />
            </ItemIcon>
            <Typography
                align='center'
                variant='caption'
                >
                    Status
            </Typography>
        </Item>
        <Item 
            selected={ props.selection === OuterSelection.Operations } 
            onClick={ props.onSelectionChange.bind( undefined, OuterSelection.Operations ) }
            >
            <ItemIcon>
                <BuildOutlined />
            </ItemIcon>
            <Typography
                align='center'
                variant='caption'
                >
                    Operations
            </Typography>
        </Item>
        <Item 
            selected={ props.selection === OuterSelection.Config } 
            onClick={ props.onSelectionChange.bind( undefined, OuterSelection.Config ) }
            >
            <ItemIcon>
                <SettingsApplicationsOutlined />
            </ItemIcon>
            <Typography
                align='center'
                variant='caption'
                >
                    Configuration
            </Typography>
        </Item>
    </Background>
  );
};

export default NavOuter;
