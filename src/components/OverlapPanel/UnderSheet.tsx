import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface IUnderSheetProps {
    height: number
}

const Root = styled( motion.div )<{ disabled?: boolean, height: number }>`
    height: ${ ({ height }) => height };
    width: 100%;
`;

const PanelHeader = styled.div<{ disabled?: boolean }>`
    height: 40px;
    width: auto;
    cursor: ${ (props) => props.disabled ? 'default' : 'pointer' };
    // display: flex; 
    // flex-direction: row;
    padding-top: 13px;
    padding-left: 8px;
    padding-right: 8px;
`;

const PanelContent = styled(motion.div)`
  padding-left: 10px;
  padding-right: 10px;
`;

const UnderSheet: React.FunctionComponent<IUnderSheetProps> = (props) => {
  return (
    <Root height={ props.height }>
      { props.children }
    </Root>
  );
};

export default UnderSheet;
