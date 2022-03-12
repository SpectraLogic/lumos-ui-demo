import * as React from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import PartitionsList, { IPartitionsListProps } from '../PartitionList/ParitionsList';
import { Routes, Route, Outlet } from 'react-router-dom'; 
import IPartition, { MediaType } from '../../interfaces/IPartition';

interface IPartitionsProps {
}

const Background = styled(Grid)`
  width: 100%;
  background-color: #f0f0f0;
  position: relative;
  padding: 10px;
`;

const createPartitionLink: string = "/Partitions/create"

const Partitions: React.FunctionComponent<IPartitionsProps> = (props) => {
  const [partitionList, setPartitionList] = React.useState<IPartition[]>( [
    { 
      id: "1",
      name: "Partition 1",
      mediaType: MediaType.LTO
    },
    { 
      id: "2",
      name: "Partition 2",
      mediaType: MediaType.LTOClean
    }
  ] );
  return(
      <Background container spacing={1}>
        <Grid item xs={ 3 }>
          <PartitionsList
            partitions={ partitionList }
            onChange={ setPartitionList }
            createPartitionLink={ createPartitionLink }
          />
        </Grid>
        <Grid item xs={ 9 }>
          <Outlet /> 
          <Routes>
            { partitionList.map( partition  => (
              <Route
                path={ `/${partition.id.replace(' ', '-')}` }
                element={ <span>{ partition.name }</span>}
                />
            ) ) }
            <Route 
              path={ createPartitionLink }
              element={ <span> new partition </span>} />
          </Routes>
        </Grid>

      </Background>
  );
};

export default Partitions;
