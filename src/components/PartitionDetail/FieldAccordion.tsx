import * as React from 'react';
import PartitionFields from './PartitionFields';
import styled from 'styled-components';
import { Accordion, AccordionDetails, AccordionSummary, Divider, Typography, Zoom, } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { motion, Variant } from 'framer-motion';

interface IFieldAccordionProps {
    panelTitle: PartitionFields;
    headerSubText: React.ReactElement;
    detailsContent: React.ReactElement;
    isAdvancedSetting?: boolean
}

const AccordionSummaryContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const AccordionSummaryLeft = styled.div`
    display: flex;
    flex-direction: column;
`;

const AccordionSummaryRight = styled(motion.div)`
    margin-left: auto;
    margin-right: 10px;
`;

const summaryRightVariants: { [key: string]: Variant } = {
    expanded: { transform: "translateY( 0px )" },
    closed: { transform: "translateY( 10px )" }
} 

const DetailsDivider = styled( Divider )`
    margin-bottom: 10px;
`;

export const ValueText = styled.span`
    color: #A68AF9;
`;

export const CenteredText = styled( Typography )`
    position: absolute;
    display: flex;
    justify-content: center;
    top: 50%;
    transform: translate( 0px, -50% );
`;

const FieldAccordion: React.FunctionComponent<IFieldAccordionProps> = (props) => {
    const [expanded, setExpanded] = React.useState( false );
  return(
    <Accordion expanded={ expanded } TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary 
        onClick={ setExpanded.bind( undefined, !expanded ) } 
        expandIcon={ <ExpandMore /> }>
            <AccordionSummaryContentContainer>
                <AccordionSummaryLeft>
                    <Typography>
                        { props.panelTitle }
                    </Typography>
                    <Zoom in={ !expanded } appear={ false } timeout={{ enter: 250,exit: 0 }} unmountOnExit>
                        <Typography variant='body2'> 
                            { props.headerSubText }
                        </Typography>
                    </Zoom>
                </AccordionSummaryLeft>
                { props.isAdvancedSetting && (
                    <AccordionSummaryRight 
                    variants={ summaryRightVariants } 
                    animate={ expanded ? "expanded" : "closed" }
                    initial={ false } 
                    transition={{ type: "tween", duration: 0.15 }}>
                        <Zoom in={ true } appear={ false }>
                            <Typography>
                                Advanced Setting
                            </Typography>
                        </Zoom>
                    </AccordionSummaryRight>
                ) }
            </AccordionSummaryContentContainer>
        </AccordionSummary>
        <AccordionDetails>
            <DetailsDivider />
            { props.detailsContent }
        </AccordionDetails>
    </Accordion>
  );
};

export default FieldAccordion;
