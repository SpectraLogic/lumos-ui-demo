import { SelectOption } from '@mui/base';
import { FormControl, InputBase, MenuItem, Select, Typography } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';
import IPartition from '../../interfaces/IPartition';
import { SortAscIcon, SortDescIcon } from '../Icons';

interface ISortControlsProps {
    sortPredicate?: (a: IPartition, b: IPartition) =>  number
    onSortPredicateChange: ( predicate: (a: IPartition, b: IPartition) => number ) => void
}

enum SortDirection {
    Ascending,
    Descending
}

enum SortParam {
    Name = "Name",
    Type = "MediaType",
}

const SortSelectInputBase = styled( InputBase )`
    height: 28px;
`;

const Root = styled.div`
    height: 30px;
    display: flex; 
    flex-direction: row;
    padding-left: 8px;
    padding-right: 8px;
`;

const LeftElements = styled.div`
    align-self: flex-start;
`;

const RightElements = styled.div`
    margin-left: auto;
`;

const StyledSortAscIcon = styled( SortAscIcon )`
    transform: scale( 0.75 );
    color: #979797;
`;

const StyledSortDescIcon = styled( SortDescIcon )`
    transform: scale( 0.75);
    color: #979797;
`;

const createPredicateFunction = ( direction: SortDirection, param: SortParam ) => {
    const key = ( param === SortParam.Name ? "name" : "mediaType" );
    const comparer = ( direction === SortDirection.Ascending ? true : false ); 
    return function sortFunc( a: IPartition, b: IPartition ){
        const order = a[key].localeCompare( b[key] as string );
        return direction === SortDirection.Descending ? order * (-1) : order;
    }
}
const SortControls: React.FunctionComponent<ISortControlsProps> = (props) => {
    const [ sortDirection, setSortDirection ] = React.useState( SortDirection.Descending );
    const [ sortParam, setSortParam ] = React.useState( SortParam.Name )

    React.useEffect( () => {
        props.onSortPredicateChange( createPredicateFunction( sortDirection, sortParam ) );
    }, [ sortDirection, sortParam ] );

  return(
    <Root>
        <LeftElements>
            <FormControl>
                <Select 
                input={ <SortSelectInputBase /> }
                onChange={ (e) => setSortDirection( e.target.value as SortDirection ) }
                value={ sortDirection }
                renderValue={ 
                    (option: SortDirection) => ( 
                        option === SortDirection.Ascending ? <StyledSortAscIcon/> : <StyledSortDescIcon/>
                    ) }>
                    <MenuItem value={ SortDirection.Descending }> 
                        <StyledSortDescIcon/>
                    </MenuItem>
                    <MenuItem value={ SortDirection.Ascending }>
                        <StyledSortAscIcon/>
                    </MenuItem>
                </Select>
            </FormControl>
        </LeftElements>
        <RightElements>
            <FormControl>
                <Select 
                input={ <SortSelectInputBase /> }
                onChange={ (e) => setSortParam( e.target.value as SortParam) }
                value={ sortParam }>
                    <MenuItem value={ SortParam.Name }> 
                        <Typography variant='body2' sx={{ color: '#979797' }}> 
                            { SortParam.Name }
                        </Typography>
                    </MenuItem>
                    <MenuItem value={ SortParam.Type }> 
                        <Typography variant='body2' sx={{ color: '#979797' }}> 
                            { SortParam.Type }
                        </Typography>
                    </MenuItem>
                </Select>
            </FormControl>
        </RightElements>
    </Root> 
    
  );
};

export default SortControls;
