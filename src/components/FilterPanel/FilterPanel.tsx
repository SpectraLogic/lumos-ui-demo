import * as React from 'react';
import styled from 'styled-components';
import { motion, Variant } from 'framer-motion'; 
import { SxProps, Typography, OutlinedInput, InputBase, TextField } from '@mui/material';
import { ExpandMore, ExpandLess, FilterAlt, Search } from '@mui/icons-material'
import IPartition from '../../interfaces/IPartition';

interface IFilterPanelProps {
    panelIsOpen: boolean
    onClick: () => void
    onFilterChange: ( func: ( partition: IPartition) => boolean ) => void
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
    width: auto;
    cursor: pointer;
    display: flex; 
    flex-direction: row;
    padding-top: 13px;
    padding-left: 8px;
    padding-right: 8px;
`;

const ElementsLeft = styled.div`
  display: flex; 
  align-self: flex-start;
`;

const ElementsRight = styled.div`
  margin-left: auto;

`;

const PanelContent = styled.div`
  padding-left: 19px;
  padding-right: 19px;
`;

const StyledTextField = styled(TextField)({
  width: '100%',
  '& label': {
    color: '#fff'
  },
  '& .MuiInputBase-input': {
    color: '#fff'
  },
  '& label.Mui-focused': {
    color: '#fff',
  },

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#fff',
    },
    '&:hover fieldset': {
      borderColor: '#fff',
    },
  },
});

const iconStyle: SxProps = { color: '#fff' };

const FilterPanel: React.FunctionComponent<IFilterPanelProps> = (props) => {
  const [ searchText, setSearchText ] = React.useState('');
  React.useEffect( () => {
    props.onFilterChange( createFilterFunction( searchText ) )
  }, [searchText] )

  const createFilterFunction: ((searchText: string) => (partition: IPartition) => boolean) = (searchText) => {
    return ( partition: IPartition ) => {
      return  partition.name.toLowerCase().includes( searchText.toLowerCase() ) || partition.mediaType.toLowerCase().includes( searchText.toLowerCase() ) 

    }
  } 

  return(
    <Root 
      whileHover='hover'
      variants={ rootAnimVariants }>
        <PanelHeader onClick={ props.onClick }>
          <ElementsLeft>
            <Typography variant='body2' sx={{ color: '#fff' }}>
              Filters
            </Typography>
            <FilterAlt sx={ { 
              display: 'flex',
              alignSelf: 'flex-start',
              height: 15,
              width: 15,
              ...iconStyle } }/>
          </ElementsLeft>
          <ElementsRight>
            { props.panelIsOpen ? <ExpandLess sx={ iconStyle } /> : <ExpandMore sx={ iconStyle }/> }
          </ElementsRight>
        </PanelHeader>  
        <PanelContent>
          <StyledTextField 
            label='Search' 
            value={ searchText }
            onChange={ (e) => setSearchText(e.target.value) }
            InputProps={{
              endAdornment: ( <Search sx={ iconStyle } /> )
          }} />
        </PanelContent>
    </Root>
  );
};

export default FilterPanel;
