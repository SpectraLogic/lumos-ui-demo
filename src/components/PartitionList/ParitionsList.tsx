import * as React from 'react';
import FilterPanel from '../FilterPanel/FilterPanel';
import styled from 'styled-components';
import { List } from '@mui/material';
import { motion } from "framer-motion";


interface IPartitionsListProps {
}

const Root = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`;

const ListPanel = styled( motion(List) )<{ filterPanelVisibility: boolean}>`
    // position: absolute;
    // top: ${ ({ filterPanelVisibility }) => filterPanelVisibility ? '190px' : '40px' };
    // top: 40px;
    // height: calc( 100% - 60px )
    height: 100%;
    width: 100%;
    // height: calc( 100% - ${ ({ filterPanelVisibility }) => filterPanelVisibility ? '210px' : '60px' } );
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    background-color: #fff;
    box-shadow: 0px -2px 2px rgba(0, 0, 0, 0.25);
`;

const listPanelAnimVariants = {
    open: { y: -10, height: 'calc( 100% - 200px )' },
    closed: { y: -150, height: 'calc( 100% - 60px )' }
}

const PartitionsList: React.FunctionComponent<IPartitionsListProps> = (props) => {

    const [filterPanelVisiblity, setFilterPanelVisibility] = React.useState( false );
  return(
    <Root>
      <FilterPanel onClick={ () => {  setFilterPanelVisibility( !filterPanelVisiblity ) } } />
      <ListPanel 
        filterPanelVisibility={ filterPanelVisiblity }
        variants={ listPanelAnimVariants }
        animate={ filterPanelVisiblity ? 'open' : 'closed' }
        transition={{ type: "tween" }}
        initial={ false }
        />
    </Root>
  );
};

export default PartitionsList;
