import { Input, Slider, Stack as BaseStack, SxProps, Typography } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';
import { TextField as BaseTextField, Chip as BaseChip } from '@mui/material';
import { ExpandMore, ExpandLess, FilterAlt, Search, Done } from '@mui/icons-material'


interface ISlotFilterProps {
    isOpen: boolean
    onHeaderClicked: () => void
}

const Root = styled.div`
    height: 265px;
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

const Content = styled.div`
  height: 195px;
  width: auto; 
	padding: 0 15px 0 15px;
`;

const TextField = styled(BaseTextField)({
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
  margin-top: 20px;
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
	transform: scale( 1.33 );
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
	margin-top: 10px;
	padding: 0 10px, 0, 10px;
`;

const SlotFilter: React.FunctionComponent<ISlotFilterProps> = (props) => {
	const [range, setRange] = React.useState<number []>([1, 500]);
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
						InputProps={{
							endAdornment: <Search sx={{ color: '#fff' }}/>
						}}
					/>
					<ChipContainerRoot>
						<ChipContainer>
							<Chip clickable label="Storage"/>	
							<Chip clickable label="Drive"/>	
							<Chip clickable label="Entry/Exit"/>	
						</ChipContainer>	
					</ChipContainerRoot>
					<Stack>
						<Slider 
							color='primary'
							value={ [range[0]/5, range[1]/5] }
							onChange={ (e, v) => {
								const [a, b] = v as number[];
								setRange([a*5,b*5]);
							}}
						/>
						<SliderDetail>
							<SliderNumInput 
								value={ range[0] }
							/>
							<Typography variant='body2'>
								Slot/Drive Range
							</Typography>
							<SliderNumInput 
								value={ range[1] }
							/>
						</SliderDetail>
					</Stack>
        </Content>
      </Root>
  );
};

export default SlotFilter;
