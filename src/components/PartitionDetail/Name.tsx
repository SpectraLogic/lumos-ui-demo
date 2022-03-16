import * as React from 'react';
import { TextField } from '@mui/material';

interface INameProps {
    value: string
    onValueChange: ( value: string ) => void
    editState?: boolean
}

const Name: React.FunctionComponent<INameProps> = (props) => {
    const [editState, setEditState] = React.useState( props.editState || false );
    if( editState ){
        return ( <TextField value={ props.value } onChange={ (e) => props.onValueChange( e.target.value ) } /> );
    }else{
        return ( <div/> );
    }
};

export default Name;
