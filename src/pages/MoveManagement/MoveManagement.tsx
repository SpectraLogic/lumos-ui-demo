import * as React from 'react';
import IPartition from '../../interfaces/IPartition';
import styled from 'styled-components';
import { Grid, Stack, Typography } from '@mui/material';
import PartitionsList from '../../components/PartitionList/ParitionsList';
import { Outlet, Route, Routes } from 'react-router-dom';
import { PartitionIcon as PartitionIconBase } from '../../components/Icons';

interface IMoveManagementProps {
    partitions: Array<IPartition>
}

const Background = styled(Grid)`
  width: 100%;
  background-color: #f0f0f0;
  position: relative;
  padding: 10px;
`;

const SelectPartition = styled( Stack )`
    position: absolute;
    align-item: center;
    width: 100%;
    top: 50%;
    transform: translateY( -50% );

`;

const SelectPartitionContainer = styled.div`
    height: 100%;
    position: relative;
`;

const PartitionIcon = styled( PartitionIconBase )`
    height: 240px;
    width: 240px;
    transform: scale(1);
    color: #979797;
    align-self: center;
    transform: translateX( 45px );
`;

const MoveManagement: React.FunctionComponent<IMoveManagementProps> = ({ partitions }) => {
    
  return(
      <Background container spacing={ 1 }>
          <Grid item xs={ 3 } sx={{ maxHeight: '100%' }}>
                <PartitionsList
                    partitions={ partitions }
                />
          </Grid>
          <Grid item xs={ 9 } sx={{ maxHeight: '100%' }}>
              <Outlet /> 
              <Routes>
                <Route index element={ 
                    <SelectPartitionContainer>
                        <SelectPartition spacing={ 2 } >
                            <Typography sx={{ alignSelf: "center", color: "#979797" }} variant='h2'>
                                Select Partition
                            </Typography>
                            <PartitionIcon />
                        </SelectPartition> 
                    </SelectPartitionContainer>
                } />
                {
                    partitions.map( partition => (
                        <Route
                            path={ `/${ partition.id }/*` }
                            element={
                                partition.name
                            }
                        />
                    ) )
                }
              </Routes>
          </Grid>
      </Background>

  );
};

export default MoveManagement;
