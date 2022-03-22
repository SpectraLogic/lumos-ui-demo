import * as React from 'react';
import FilterPanel from '../FilterPanel/FilterPanel';
import styled from 'styled-components';
import { Divider, List, ListItem, ListItemText, Zoom } from '@mui/material';
import { motion } from "framer-motion";
import IPartition from '../../interfaces/IPartition';
import { Link } from 'react-router-dom';
import PartitionListItem from './PartitionListItem';
import ActionBar from './ActionBar';
import { useResolvedPath, useMatch, To } from 'react-router-dom';
import SortControls from './SortControls';
import _ from 'lodash';

export interface IPartitionsListProps {
    partitions: IPartition[]
    enableManagement?: boolean
    onChange?: ( partitions: IPartition[] ) => void 
    createPartitionLink?: To
}

const Root = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`;

const ListPanel = styled( motion(List) )`
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

const StyledSortControls = styled( SortControls )`
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

const NewPartitionItemBackground = styled( motion.div )`
    position: absolute;
    height: 72px;
    color: #fff;
    background-color: #A68AF9;
    width: 100%;
`

const newPartitionItemBgVariants = {
    open: (height = 72) => ({
      clipPath: `circle(${height * 2 + 200}px at 50% 50%)`,
      transition: {
        type: "tween",
        duration: 0.33
      }
    }),
    closed: {
      clipPath: "circle(0px at 50% 50%)",
      transition: {
        type: "tween",
        duration: 0.15
      }
    }
  };


const PartitionsList: React.FunctionComponent<IPartitionsListProps> = (props) => {
    const [filterPanelVisiblity, setFilterPanelVisibility] = React.useState( false );
    const [sortFunction, setSortFunction] = React.useState<(( a: IPartition, b: IPartition ) => number)>();
    const [filterFunction, setFilterFunction] = React.useState<(( partition: IPartition ) => boolean)>( () => (value: IPartition) => true );
    if( props.enableManagement && ( _.isUndefined( props.onChange ) || _.isUndefined( props.createPartitionLink ) ) ){
      throw "onChange() and createPartitionLink need to be provided when <PartitionList /> is set to management mode "
    }
    let resolved = useResolvedPath( props.createPartitionLink || "" );
    let createPartitionMatch = useMatch({ path: resolved.pathname, end: false });
    const createMode = createPartitionMatch && props.enableManagement;
  return(
    <Root>
      <FilterPanel 
        disabled={ createMode ? true : false }
        panelIsOpen={ createMode ? false : filterPanelVisiblity } 
        onClick={ () => {  setFilterPanelVisibility( !filterPanelVisiblity ) } } 
        onFilterChange={ ( func ) => { setFilterFunction( () => func ) } }
        />
      <ListPanel 
        variants={ listPanelAnimVariants }
        animate={ filterPanelVisiblity && !createMode ? 'open' : 'closed' }
        transition={{ type: "tween" }}
        initial={ false }>
            <StyledSortControls sortPredicate={ undefined } onSortPredicateChange={ ( func ) => setSortFunction( () => func ) } />
            <Divider />
            <NewPartitionItemBackground 
                variants={ newPartitionItemBgVariants }
                animate={ createMode ? 'open' : 'closed' }
                initial={ false } />
            <Zoom in={ createMode ? true : false } >
                <ListItem>
                    <ListItemText
                        primary="New Partition"
                        secondary="LTO" 
                        primaryTypographyProps={{ sx: { color: '#fff' } }}
                        secondaryTypographyProps={{ sx: { color: 'rgb(255 255 255 / 75%)' } }}
                        />
                </ListItem>
            </Zoom>
            {
                props.partitions.filter( filterFunction ).sort( sortFunction ).map( (partition) => {
                   return <PartitionListItem key={ partition.id } disabled={ createMode } to={ `./${partition.id}` } partition={ partition } />
                 } )
            }
        </ListPanel>
        { props.enableManagement && ( <StyledActionBar createPartitionLink={ props.createPartitionLink! } /> ) }
        
    </Root>
  );
};

export default PartitionsList;
