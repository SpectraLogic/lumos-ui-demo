import * as React from 'react';
import FilterPanel from '../FilterPanel/FilterPanel';
import styled from 'styled-components';
import { List, ListItem, ListItemText } from '@mui/material';
import { motion } from "framer-motion";
import IPartition from '../../interfaces/IPartition';
import { Link } from 'react-router-dom';
import PartitionListItem from './PartitionListItem';
import ActionBar from './ActionBar';

export interface IPartitionsListProps {
    partitions: IPartition[]
    onChange: ( partitions: IPartition[] ) => void 
}

const Root = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`;

const ListPanel = styled( motion(List) )<{ filterPanelVisibility: boolean}>`
    position: relative;
    height: 100%;
    width: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    background-color: #fff;
    box-shadow: 0px -2px 2px rgba(0, 0, 0, 0.25);
`;

const SortControls = styled.div`
    height: 23px;
    width: 100%;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
`;

const listPanelAnimVariants = {
    open: { y: -10, height: 'calc( 100% - 200px )' },
    closed: { y: -150, height: 'calc( 100% - 60px )' }
}

const StyledLink = styled( Link )`
    text-decoration: none;
`
const StyledActionBar = styled( ActionBar )`
    position: absolute;
    bottom: 0px;
`

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
        initial={ false }>
            <SortControls />
            {
                props.partitions.map( (partition) => (
                    <PartitionListItem to={ `./${partition.id}` } partition={ partition } />
                ) )
            }
        </ListPanel>
        <StyledActionBar />
    </Root>
  );
};

export default PartitionsList;
