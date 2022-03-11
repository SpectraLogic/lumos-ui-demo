import styled from 'styled-components';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import { ListItem, ListItemText } from '@mui/material';

const StyledListItem = styled( ListItem )`
    color: inherit;
    background-color: ${ ({match}) => match ? '#f0f0f0': '#fff' }
`;

export default function PartitionListItem( props ){
    const { name, mediaType, id } = props.partition;
    let resolved = useResolvedPath(props.to);
    let match = useMatch({ path: resolved.pathname, end: false });
    return (
        <StyledListItem
            to={ props.to }
            component={ Link }
            match={ match }
            { ...props }>
            <ListItemText primary={ name } secondary={ mediaType } />   
        </StyledListItem>
    )

}