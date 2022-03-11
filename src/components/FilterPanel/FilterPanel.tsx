import * as React from 'react';
import styled from 'styled-components';

interface IFilterPanelProps {
    onClick: () => void
}

const Root = styled.div`
    height: 190px;
    width: 100%;
    background-color: #A68AF9;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    
`;

const PanelHeader = styled.div`
    height: 40px;
    width: 100%;
    cursor: pointer;
`;


const FilterPanel: React.FunctionComponent<IFilterPanelProps> = (props) => {
  return(
    <Root>
        <PanelHeader onClick={ props.onClick }/>  
    </Root>
  );
};

export default FilterPanel;
