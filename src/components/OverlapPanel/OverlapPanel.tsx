import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface IOverlapPanelProps {
    underSheetHeightTotal: number;
    underSheetHeightPeek: number;
    underSheetElement: React.ReactElement;
    overSheetElement: React.ReactElement;
    isOpen: boolean;
    squishOversheet?: boolean
}

const Root = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`;

const OverSheet = styled( motion.div )`
    position: relative;
    height: 100%;
    width: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: #fff;
    // box-shadow: 0px -2px 2px rgba(0, 0, 0, 0.25);
`;

const UnderSheet = styled.div<{ height: number }>`
    height: ${ ({ height }) => `${height}px` };
    width: 100%;
`;

const getOverSheetMotionVariants = ( peekHeight: number, totHeight: number, squish: boolean ) => ({
    open: { y: -10 , height: squish ? `calc( 100% - ${ totHeight }px )` : undefined },
    closed: { y: -(totHeight - peekHeight - 10), height: `calc( 100% - ${ peekHeight }px )` }
})
 
const OverlapPanel: React.FunctionComponent<IOverlapPanelProps> = (props) => {
    const squish = props.squishOversheet === undefined ? true : props.squishOversheet;
  return(
      <Root>
        <UnderSheet height={ props.underSheetHeightTotal }>
            { props.underSheetElement }
        </UnderSheet>
        <OverSheet
            initial={ false }
            variants={ getOverSheetMotionVariants( props.underSheetHeightPeek, props.underSheetHeightTotal, squish ) }
            animate={ props.isOpen ? 'open' : 'closed' }
            transition={{ type: 'tween' }}>
                { props.overSheetElement }
        </OverSheet>
      </Root>
  );
};

export default OverlapPanel;
