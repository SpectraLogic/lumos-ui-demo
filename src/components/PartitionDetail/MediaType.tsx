import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Zoom } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';
import { MediaType as EMediaType } from '../../interfaces/IPartition';
import PartitionFieldProps from './PartitionFieldProps';
import PartitionFields from './PartitionFields';

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
    <Accordion expanded={ expanded } onClick={ setExpanded.bind( undefined, !expanded ) }>
        <AccordionSummary expandIcon={ <ExpandMore /> } >
            <AccordionSummaryContent>
                <Typography>
                    { PartitionFields.MediaType }
                </Typography>
                <Zoom in={ !expanded }>
                    <ValueTypography variant='caption' >
                        { props.value }
                    </ValueTypography>
                </Zoom>
            </AccordionSummaryContent>
        </AccordionSummary>
        <AccordionDetails>
            detail
        </AccordionDetails>
    </Accordion>
  );
};

export default MediaType;
