import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, FormControl, InputLabel, MenuItem, Typography, Zoom, Select } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';
import { MediaType as EMediaType } from '../../../interfaces/IPartition';
import PartitionFieldProps from '../PartitionFieldProps';
import PartitionFields from '../PartitionFields';

interface IMediaTypeProps extends PartitionFieldProps<EMediaType>{

}

const AccordionSummaryContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const ValueTypography = styled( Typography )`
    color: #A68AF9;
`;

const MediaType: React.FunctionComponent<IMediaTypeProps> = (props) => {
    const [expanded, setExpanded] = React.useState( false );
  return(
    <Accordion expanded={ expanded }>
        <AccordionSummary onClick={ setExpanded.bind( undefined, !expanded ) } expandIcon={ <ExpandMore /> } >
            <AccordionSummaryContent>
                <Typography>
                    { PartitionFields.MediaType }
                </Typography>
                <Zoom in={ !expanded } timeout={{ enter: 250, exit: 50 }} unmountOnExit>
                    <ValueTypography variant='caption' >
                        { props.value }
                    </ValueTypography>
                </Zoom>
            </AccordionSummaryContent>
        </AccordionSummary>
        <AccordionDetails>
            <FormControl fullWidth>
                <Select value={ props.value } onChange={ (e) => props.onValueChange( e.target.value as EMediaType ) } > 
                    <MenuItem value={ EMediaType.LTO}>{ EMediaType.LTO }</MenuItem>
                    <MenuItem value={ EMediaType.LTOClean }>{ EMediaType.LTOClean }</MenuItem>
                </Select>    
            </FormControl>
        </AccordionDetails>
    </Accordion>
  );
};

export default MediaType;
