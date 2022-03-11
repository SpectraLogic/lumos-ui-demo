import * as React from 'react';
import styled from 'styled-components';
import { motion, Variant } from 'framer-motion'; 

interface IFilterPanelProps {
    onClick: () => void
}

const Root = styled( motion.div )`
    height: 190px;
    width: 100%;
    background-color: #A68AF9;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
`;

const rootAnimVariants: { [key: string]: Variant } = {
  hover: { backgroundColor: '#916DFB' }
}

const PanelHeader = styled.div`
    height: 40px;
    width: 100%;
    cursor: pointer;
`;


const FilterPanel: React.FunctionComponent<IFilterPanelProps> = (props) => {
  return(
    <Root 
      whileHover='hover'
      variants={ rootAnimVariants }>
        <PanelHeader onClick={ props.onClick }/>  
    </Root>
  );
};

export default FilterPanel;
