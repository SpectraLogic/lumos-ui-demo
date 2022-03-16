import * as React from 'react';
import PartitionFields from './PartitionFields';
import styled from 'styled-components';
import { Accordion, AccordionDetails, AccordionSummary, Divider, Typography, Zoom, } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

interface IFieldAccordionProps {
    panelTitle: PartitionFields;
    headerSubText: React.ReactElement;
    detailsContent: React.ReactElement;
}

const AccordionSummaryContent = styled.div`
    display: flex;
    flex-direction: column;
`;
const DetailsDivider = styled( Divider )`
    margin-bottom: 10px;
`;
const FieldAccordion: React.FunctionComponent<IFieldAccordionProps> = (props) => {
    const [expanded, setExpanded] = React.useState( false );
  return(
    <Accordion expanded={ expanded }>
        <AccordionSummary onClick={ setExpanded.bind( undefined, !expanded ) } expandIcon={ <ExpandMore /> }>
            <AccordionSummaryContent>
                <Typography>
                    { props.panelTitle }
                </Typography>
                <Zoom in={ !expanded } timeout={{ enter: 250,exit: 0 }} unmountOnExit>
                    <Typography variant='caption'> 
                        { props.headerSubText }
                    </Typography>
                </Zoom>
            </AccordionSummaryContent>
        </AccordionSummary>
        <AccordionDetails>
            <DetailsDivider />
            { props.detailsContent }
        </AccordionDetails>
    </Accordion>
  );
};

export default FieldAccordion;
