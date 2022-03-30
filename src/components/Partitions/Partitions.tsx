import * as React from 'react';
import styled from 'styled-components';
import { Grid, Zoom } from '@mui/material';
import PartitionsList, { IPartitionsListProps } from '../PartitionList/ParitionsList';
import { Routes, Route, Outlet, useResolvedPath, useMatch } from 'react-router-dom'; 
import IPartition, { CheckSumBehavior, MediaType, TruncationOptions } from '../../interfaces/IPartition';
import PartitionDetail from '../PartitionDetail/PartitionDetail';
import PartitionFields from '../PartitionDetail/PartitionFields';
import uniqid from 'uniqid';
import AdvancedSettingsWarning from '../PartitionDetail/Dialogs/AdvancedSettingsWarning';
import { motion } from 'framer-motion';

interface IPartitionsProps {
  partitions: IPartition[]
  onPartitionsChange: ( partitions: IPartition[] ) => void
}

const Background = styled( motion( Grid ) )`
  width: 100%;
  background-color: #f0f0f0;
  position: relative;
  padding: 10px;
`;

const createPartitionLink: string = "/Partitions/create"

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
  
  return(
      <Background container spacing={1}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'tween', duration: 0.75 }}>
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
          <Routes>
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
          </Routes>
        </Grid>
      </Background>
  );
};

export default Partitions;
