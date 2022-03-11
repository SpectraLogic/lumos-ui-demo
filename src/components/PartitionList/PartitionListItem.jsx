import styled from 'styled-components';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import { ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';

const StyledListItem = styled(  motion(ListItem) )`
    color: inherit;
    // background-color: ${ ({match}) => match ? '#f0f0f0': '#fff' }
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
            animate={{ backgroundColor: `${ match ? '#f0f0f0': '#fff' }` }}
            initial={ false }
            { ...props }>
            <ListItemText primary={ name } secondary={ mediaType } />   
        </StyledListItem>
    )

}