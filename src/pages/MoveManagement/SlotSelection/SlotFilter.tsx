import { SxProps, Typography } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';
import { ExpandMore, ExpandLess, FilterAlt, Search, Done } from '@mui/icons-material'


interface ISlotFilterProps {
    isOpen: boolean
    onHeaderClicked: () => void
}

const Root = styled.div`
    height: 213px;
    width: 100%;
    background-color: #A68AF9 ;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
`;

const Header = styled.div<{ disabled?: boolean }>`
    height: 40px;
    width: auto;
    cursor: ${ (props) => props.disabled ? 'default' : 'pointer' };
    display: flex; 
    flex-direction: row;
    padding-top: 13px;
    padding-left: 8px;
    padding-right: 8px;
`;

const HeaderLeft = styled.div`
  display: flex; 
  align-self: flex-start;
`;

const HeaderRight = styled.div`
  margin-left: auto;
`;
const iconStyle: SxProps = { color: '#fff' };

const SlotFilter: React.FunctionComponent<ISlotFilterProps> = (props) => {
  return(
      <Root>
        <Header onClick={ props.onHeaderClicked }>
            <HeaderLeft>
                <Typography variant='body2' sx={{ color: '#fff' }}>
                Filters
                </Typography>
                <FilterAlt sx={ { 
                display: 'flex',
                alignSelf: 'flex-start',
                height: 15,
                width: 15,
                ...iconStyle } }/>
            </HeaderLeft>
            <HeaderRight>
                { props.isOpen ? <ExpandLess sx={ iconStyle } /> : <ExpandMore sx={ iconStyle }/> }
            </HeaderRight>
        </Header>
      </Root>
  );
};

export default SlotFilter;
