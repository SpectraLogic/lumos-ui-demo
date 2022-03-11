import * as React from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import PartitionsList, { IPartitionsListProps } from '../PartitionList/ParitionsList';
import { Routes, Route, Outlet } from 'react-router-dom'; 

interface IPartitionsProps extends IPartitionsListProps {
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
          <PartitionsList
            { ...props }
          />
        </Grid>
        <Grid item xs={ 9 }>
          <Outlet /> 
          <Routes>
            { props.partitions.map( partition  => (
              <Route
                path={ `/${partition.id.replace(' ', '-')}` }
                element={ <span>{ partition.name }</span>}
                />
            ) ) }
          </Routes>
        </Grid>

      </Background>
  );
};

export default Partitions;
