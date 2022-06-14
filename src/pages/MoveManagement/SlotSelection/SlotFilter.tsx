import { Input, Slider, Stack as BaseStack, SxProps, Typography } from '@mui/material';
import * as React from 'react';
import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components';
import { TextField as BaseTextField, Chip as BaseChip } from '@mui/material';
import { ExpandMore, ExpandLess, FilterAlt, Search, Done, Check } from '@mui/icons-material'
import { ITapeSlot, SlotType } from '../../../interfaces/ITapeSlot';
import * as _ from 'lodash';
import { motion, Variant } from 'framer-motion';
import { BaseTheme } from '../../../assets/theme';


interface ISlotFilterProps {
    isOpen: boolean
    onHeaderClicked: () => void
		onChange: ( predicateFunc: ( slot: ITapeSlot ) => boolean ) => void
		onResetChange: ( resetFunc: ( () => void ) | undefined  ) => void
}

const Root = styled.div<{ theme: BaseTheme }>`
    height: 265px;
    width: 100%;
    background-color: ${ ({theme}) => theme.colors.primaryMain };
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
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

const Content = styled.div`
  height: 195px;
  width: auto; 
	padding: 0 15px 0 15px;
`;

const TextField = styled( motion( BaseTextField ) )({
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
  margin-top: 10px;
  display: flex; 
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const ChipContainer = styled.div`
  display: flex;
	width: 100%;
  justify-content: space-evenly;
`;

const Chip = styled( BaseChip )`
  background-color: #fff;
  border-radius: 4px;
	// transform: scale( 1.33 );
  &:hover{
    color: #fff;
    border: 1px solid #fff;
    & .MuiSvgIcon-root{
      color: #fff;
    }
  };
`;

const SliderDetail = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	color: #fff;
`;

const SliderNumInput = styled( TextField )`
	width: 50px;
	& .MuiInputBase-input{
		padding: 5px 5px 5px 5px
	}
`;

const Stack = styled( BaseStack )`
	margin-top: 5px;
	padding: 0 10px 0 10px;
`;

const searchBoxVariants: {[key: string]: Variant} = {
	hide: { visibility: 'hidden' },
	show: { visibility:'visible' }
}

const rangeDefault = [1, 500];
const slotTypeFilterDefault = { 
	[SlotType.DRIVE]: true,
	[SlotType.EE]: true,
	[SlotType.STORAGE]: true
};

const createFilterPredicate = ( searchText: string, range: [number, number], slotTypeFilter: { [type: string]: boolean } ) => {
	return ( slot: ITapeSlot ) => {
			const searchTextBool = _.values( slot ).map( value => value?.toString().toLowerCase().includes( searchText.toLowerCase() ) ).reduce( ( prev, curr ) => (prev || curr), false);
			const rangeBool = slot.number >= range[0] && slot.number <= range[1];
			const typeBool = slotTypeFilter[slot.type];
		return  searchTextBool! && rangeBool && typeBool;
	}
}

const createResetFunc = ( 
		searchText: string, 
		range: [number, number],
		slotTypeFilter: { [type: string]: boolean }, 
		resetFunction: () => void ) => {
	if( searchText === "" && _.isEqual( range, rangeDefault ) && _.isEqual( slotTypeFilter, slotTypeFilterDefault ) )
		return undefined
	
	return resetFunction;
} 

const SlotFilter: React.FunctionComponent<ISlotFilterProps> = (props) => {
	const [sliderCommits, setSliderCommits] = React.useState<number>(0);
	const [searchText, setSearchText] = React.useState<string>("");
	const [range, setRange] = React.useState<[number, number]>( [rangeDefault[0], rangeDefault[1]] );
	const [slotTypeFilter, setSlotTypeFilter] = React.useState<{ [type: string]: boolean }>( slotTypeFilterDefault );

	React.useEffect( () => {
		props.onChange( createFilterPredicate( searchText, range, slotTypeFilter ) );
		props.onResetChange( createResetFunc( searchText, range, slotTypeFilter, () => {
			setSearchText("");
			setRange( rangeDefault as [number, number] );
			setSlotTypeFilter( slotTypeFilterDefault );
			setSliderCommits( sliderCommits+1 );
		} ) );
	}, [searchText, sliderCommits, slotTypeFilter]);

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
        <Content>
					<TextField 
						label="Search"
						value={ searchText }
						onChange={ e => setSearchText( e.target.value ) }
						variants={ searchBoxVariants }
						animate={ props.isOpen ? 'show' : 'hide' }
						transition={{ type: "tween", delay: 0.11 }} 
						InputProps={{
							endAdornment: <Search sx={{ color: '#fff' }}/>
						}}
					/>
					<ChipContainerRoot>
						<ChipContainer>
							{
								[SlotType.STORAGE, SlotType.DRIVE, SlotType.EE].map( type => (
									<Chip 
										key={ type }
										clickable	
										label={ type }
										icon={ slotTypeFilter[type] ? <Check/> : <></> } 
										onClick={ setSlotTypeFilter.bind( undefined, { ...slotTypeFilter, [type]: !slotTypeFilter[type] }) }	
									/>	
								))
							}
						</ChipContainer>	
					</ChipContainerRoot>
					<Stack>
						<Slider 
							color='secondary'
							onChangeCommitted={ setSliderCommits.bind( undefined, sliderCommits+1 ) }
							value={ [range[0]/5, range[1]/5] }
							onChange={ (e, v) => {
								const [a, b] = v as number[];
								setRange([a*5,b*5]);
							}}
						/>
						<SliderDetail>
							<SliderNumInput 
								value={ range[0] }
								inputProps={{ inputMode: 'numeric' }}
								onChange={ e => {
									if(_.isEmpty( e.target.value ) ) return;
									const val = parseInt(e.target.value);
									setRange([ val > range[1] ? range[1] : val, range[1] ]);
									setSliderCommits( sliderCommits+1 );
								} }
							/>
							<Typography variant='body2'>
								Slot/Drive Range
							</Typography>
							<SliderNumInput 
								value={ range[1] }
								inputProps={{ inputMode: 'numeric' }}
								onChange={ e => {
									if(_.isEmpty( e.target.value ) ) return;
									const val = parseInt(e.target.value);
									setRange([ range[0], val < range[0] ? range[0] : val ]);
									setSliderCommits( sliderCommits+1 );
								} }
							/>
						</SliderDetail>
					</Stack>
        </Content>
      </Root>
  );
};

export default SlotFilter;
