import * as React from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';

interface IPartitionsProps {
}

const Background = styled(Grid)`
  width: 100%;
  background-color: #000;
  position: relative;
`;

const Partitions: React.FunctionComponent<IPartitionsProps> = (props) => {
  return(
      <Background>
          <p style={{ position: 'absolute', bottom: '1px', color: '#fff'}}>Partitions!</p>
      </Background>
  );
};

export default Partitions;
