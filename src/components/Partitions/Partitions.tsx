import * as React from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import PartitionsList from '../PartitionList/ParitionsList';

interface IPartitionsProps {
}

const Background = styled(Grid)`
  width: 100%;
  background-color: #f0f0f0;
  position: relative;
  padding: 10px;
`;



const Partitions: React.FunctionComponent<IPartitionsProps> = (props) => {
  return(
      <Background container spacing={1}>
        <Grid item xs={ 3 }>
          <PartitionsList />
        </Grid>
      </Background>
  );
};

export default Partitions;
