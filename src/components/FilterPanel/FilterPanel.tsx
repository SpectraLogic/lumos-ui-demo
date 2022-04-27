import * as React from 'react';
import styled from 'styled-components';
import { motion, Variant } from 'framer-motion'; 
import { SxProps, Typography, OutlinedInput, InputBase, TextField, Chip, Paper } from '@mui/material';
import { ExpandMore, ExpandLess, FilterAlt, Search, Done } from '@mui/icons-material'
import IPartition from '../../interfaces/IPartition';
import { BaseTheme, baseTheme } from '../../assets/theme';

interface IFilterPanelProps {
    panelIsOpen: boolean
    onClick: () => void
    onFilterChange: ( func: ( partition: IPartition) => boolean ) => void
    disabled?: boolean
}

const Root = styled( motion( Paper ) )<{ theme: BaseTheme, disabled?: boolean }>`
    height: 190px;
    width: 100%;
    background-color: ${ ({ theme }) => theme.colors.primaryMain };
    // background-color: ${ (props) => props.disabled ? '#c3aeff' : '#A68AF9' };
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;

const rootAnimVariants: { [key: string]: Variant } = {
  hover: { backgroundColor: baseTheme.colors.primaryDark },
  disabled: { }
}

const PanelHeader = styled.div<{ disabled?: boolean }>`
    height: 40px;
    width: auto;
    cursor: ${ (props) => props.disabled ? 'default' : 'pointer' };
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

const PanelContent = styled(motion.div)`
  padding-left: 10px;
  padding-right: 10px;
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

const ChipContainerRoot = styled.div`
  margin-top: 8px;
  display: flex; 
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const ChipContainer = styled.div`
  display: flex;
  justify content: center;
  gap 10px;
`;

const StyledChip = styled( Chip )`
  background-color: #fff;
  border-radius: 4px;
  &:hover{
    color: #fff;
    border: 1px solid #fff;
    & .MuiSvgIcon-root{
      color: #fff;
    }
  };
`;

const panelContentVariants: {[key: string]: Variant} = {
  hide: { visibility: 'hidden' },
  show: { visibility:'visible' }
}

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
      color='primary'
      disabled={ props.disabled }
      whileHover={ props.disabled ? 'disabled' : 'hover'}
      variants={ rootAnimVariants }>
        <PanelHeader onClick={ props.onClick } disabled={ props.disabled }>
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
        <PanelContent 
          initial={ false }
          variants={ panelContentVariants }
          animate={ props.panelIsOpen ? 'show' : 'hide' }
          transition={{ type: "tween", delay: 0.11 }} >
          <StyledTextField 
            label='Search' 
            value={ searchText }
            onChange={ (e) => setSearchText(e.target.value) }
            InputProps={{
              endAdornment: ( <Search sx={ iconStyle } /> )
          }} />
          <ChipContainerRoot>
            <ChipContainer>
              <StyledChip clickable size='small' label="LTO" avatar={ <Done /> } /> 
              <StyledChip clickable size='small' label="LTO Clean" avatar={ <Done />}/> 
            </ChipContainer>
            <ChipContainer>
              <StyledChip clickable size='small' label="TS" avatar={ <Done /> } /> 
              <StyledChip clickable size='small' label="TS Clean" avatar={ <Done />}/> 
            </ChipContainer>
          </ChipContainerRoot>
        </PanelContent>
    </Root>
  );
};

export default FilterPanel;
