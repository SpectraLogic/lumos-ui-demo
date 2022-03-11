import { Fab, Zoom } from '@mui/material';
import styled from 'styled-components';
import { PartitionAddIcon } from '../Icons';
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { useTheme } from '@mui/material';
import { Close } from '@mui/icons-material';

const BaseFab = styled( Fab )`
    position: absolute; 
    right: 22px;
    bottom: 36px;
`;

const CreateFab = styled( BaseFab )`
    background: #A68AF9;
    &:hover{
        background: #916DFB;
    }
`;

const CancelFab = styled( BaseFab )`
    background: #E74C3C;
    &:hover{
        background: #EB3320;
    }
`

const StyledPartitionAddIcon = styled( PartitionAddIcon )`
    color: #fff;
    transform: scale( 1.5 );
`;

const StyledCloseIcon = styled( Close )`
    color: #fff;
`

export default function CreatePartitionFab ( props ) {
    let resolved = useResolvedPath(props.createPartitionLink);
    let createPartitionMatch = useMatch({ path: resolved.pathname, end: false });
    return (
        <>
            <Zoom
                in={ !createPartitionMatch }
                unmountOnExit >
                <CreateFab
                    to={ props.createPartitionLink }
                    component={ Link }>
                    <StyledPartitionAddIcon 
                        viewBox='0 0 40 40' 
                        height={ 40 } width={ 40 } />
                </CreateFab>
            </Zoom>
            <Zoom in={ createPartitionMatch } unmountOnExit>
                <CancelFab
                    to='/Partitions'
                    component={ Link }>
                        <StyledCloseIcon color='#fff' />
                    </CancelFab>
            </Zoom>
        </>

    )
}