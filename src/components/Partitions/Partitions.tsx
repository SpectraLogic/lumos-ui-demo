import * as React from 'react';
import styled from 'styled-components';
import { Grid, Zoom, Stack, Typography } from '@mui/material';
import { PartitionIcon as PartitionIconBase } from '../../components/Icons';
import PartitionsList, { IPartitionsListProps } from '../PartitionList/ParitionsList';
import { Routes, Route, Outlet, useResolvedPath, useMatch, useLocation } from 'react-router-dom'; 
import IPartition, { CheckSumBehavior, MediaType, TruncationOptions } from '../../interfaces/IPartition';
import PartitionDetail from '../PartitionDetail/PartitionDetail';
import PartitionFields from '../PartitionDetail/PartitionFields';
import { AnimatePresence, motion, Variants } from 'framer-motion';

interface IPartitionsProps {
  partitions: IPartition[]
  onPartitionsChange: ( partitions: IPartition[] ) => void
}


const Root = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f0f0f0;
  border-radius: 10px 10px;
`;

const Background = styled( motion( Grid ) )`
  height: 100%;
  width: 100%;
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


const createPartitionLink: string = "/Partitions/create"

const rootVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { 
    opacity: 0,
    transition: { type: 'tween', duration: 0.33 }
  }
}; 

const Partitions: React.FunctionComponent<IPartitionsProps> = (props) => {
  const DEFAULT_PARTITION: IPartition = {
    id: "DEFAULT",
    name: "New Partition",
    mediaType: MediaType.LTO,
    [PartitionFields.SlotIQ]: false,
    [PartitionFields.BarcodeOptions]: {
      checkSumBehavior: CheckSumBehavior.CHECK,
      truncationOption: TruncationOptions.LEFT,
      numReportedChars: 16
    },
    [PartitionFields.Chambers]: {
      ee: 0,
      storage: 0
    },
    [PartitionFields.Drives]: [],
    [PartitionFields.CleaningPartition]: false,
    [PartitionFields.MLMVerification]: {
      quickScan: true,
      preScan: true
    }

  } 

  const location = useLocation()

  return(
    <Root>
        <Background container spacing={1}
          variants={ rootVariants }
          initial={false}
          animate='visible'
          exit='exit'>
            <Grid item xs={ 3 } sx={{ maxHeight: '100%' }} >
              <PartitionsList
                partitions={ props.partitions }
                enableManagement
                onChange={ props.onPartitionsChange }
                createPartitionLink={ createPartitionLink }
              />
            </Grid>
            <Grid item xs={ 9 } sx={{ maxHeight: '100%' }}>
              <Outlet />
              <AnimatePresence exitBeforeEnter>
                <Routes location={ location } key={ location.pathname }>
                  { props.partitions.map( partition  => (
                    <Route
                      key={ partition.id }
                      path={ `/${partition.id.replace(' ', '-')}/*` }
                      element={ 
                        <PartitionDetail 
                          key={ partition.id } 
                          onChange={ partition => props.onPartitionsChange( [ ...props.partitions.filter( iter => iter.id !== partition.id ), partition ] ) }
                          availablePartitions={ props.partitions }
                          partitionId={ partition.id } 
                          partition={ partition }/> 
                      }
                    />
                  ) ) }
                  <Route 
                    path={ `/create` }
                    element={ 
                      <PartitionDetail 
                        key={ "CREATE_PARTITION_DETIAL" }
                        onChange={ partition => props.onPartitionsChange( [ ...props.partitions, partition ] ) }
                        availablePartitions={ props.partitions }
                        partitionId={ DEFAULT_PARTITION.id }
                        partition={ DEFAULT_PARTITION }
                      />
                    }
                  />
                  <Route 
                    index
                    element={ 
                    <SelectPartitionContainer>
                        <SelectPartition spacing={ 2 } >
                            <Typography sx={{ alignSelf: "center", color: "#979797" }} variant='h2'>
                                Select Partition
                            </Typography>
                            <PartitionIcon />
                        </SelectPartition> 
                    </SelectPartitionContainer>
                    }
                  />
                </Routes>
              </AnimatePresence> 
            </Grid>
        </Background>
      </Root>
  );
};

export default Partitions;
