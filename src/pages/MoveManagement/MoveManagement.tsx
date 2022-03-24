import * as React from 'react';
import IPartition from '../../interfaces/IPartition';
import styled from 'styled-components';
import { Button, Grid, Stack, Typography } from '@mui/material';
import PartitionsList from '../../components/PartitionList/ParitionsList';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import { PartitionIcon as PartitionIconBase } from '../../components/Icons';
import SlotSelection from './SlotSelection';

interface IMoveManagementProps {
    partitions: Array<IPartition>
}

const Root = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: #f0f0f0;

`;

const Background = styled(Grid)`
  width: 100%;
  position: relative;
  padding: 10px;
  flex-grow: 1;
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
    const navigate = useNavigate();
  return(
      <Root>
        <Routes>
            <Route index element={
                <Background container spacing={ 1 }>
                    <Grid item xs={ 3 } sx={{ maxHeight: '100%' }}>
                        <PartitionsList
                            partitions={ partitions }
                        />
                        </Grid>
                    <Grid item xs={ 9 } sx={{ maxHeight: '100%' }}>
                        <SelectPartitionContainer>
                            <SelectPartition spacing={ 2 } >
                                <Typography sx={{ alignSelf: "center", color: "#979797" }} variant='h2'>
                                    Select Partition
                                </Typography>
                                <PartitionIcon />
                            </SelectPartition> 
                        </SelectPartitionContainer>
                    </Grid>    
                </Background>  
            }/>
            {
                partitions.map( partition => (
                    <Route
                        path={ `/${ partition.id }/*` }
                        element={
                            <>
                                <Background container spacing={ 1 }>     
                                    <Grid item xs={ 4 }>
                                        <SlotSelection 
                                            selectionType='source'
                                        />
                                    </Grid>
                                    <Grid item xs={ 4 }>
                                        <SlotSelection 
                                            selectionType='destination'
                                        />
                                    </Grid>
                                    <Grid item xs={ 4 }>
                                        moves
                                    </Grid>
                                </Background>
                                <Button 
                                fullWidth 
                                onClick={ () => navigate( '../Move-Media' ) }
                                variant='contained'> 
                                    Go Back
                                </Button>
                            </>
                        }
                    />
                ) )
            }    
        </Routes>
        <Outlet/>
      </Root>

  );
};

export default MoveManagement;
