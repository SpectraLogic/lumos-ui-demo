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

interface IPartitionsProps {
}

const Background = styled(Grid)`
  width: 100%;
  background-color: #f0f0f0;
  position: relative;
  padding: 10px;
`;

const createPartitionLink: string = "/Partitions/create"
const mediaCleanId = uniqid();
const Partitions: React.FunctionComponent<IPartitionsProps> = (props) => {
  const [partitionList, setPartitionList] = React.useState<IPartition[]>( [
    { 
      id: uniqid(),
      name: "Media 1",
      mediaType: MediaType.LTO,
      [PartitionFields.SlotIQ]: false,
      [PartitionFields.BarcodeOptions]: {
        checkSumBehavior: CheckSumBehavior.CHECK,
        truncationOption: TruncationOptions.LEFT,
        numReportedChars: 16,
      },
      [PartitionFields.Chambers]: {
          storage: 20,
          ee: 0
      },
      [PartitionFields.Drives]: [],
      [PartitionFields.CleaningPartition]: mediaCleanId,
      [PartitionFields.MLMVerification]: {
        quickScan: true,
        preScan: true
      }
    },
    { 
      id: mediaCleanId,
      name: "Media Clean",
      mediaType: MediaType.LTOClean,
      [PartitionFields.SlotIQ]: true,
      [PartitionFields.BarcodeOptions]: {
        checkSumBehavior: CheckSumBehavior.CHECK,
        truncationOption: TruncationOptions.LEFT,
        numReportedChars: 16
      },
      [PartitionFields.Chambers]: {
        clean: 5
     },
     [PartitionFields.Drives]: [],
     [PartitionFields.CleaningPartition]: false,
     [PartitionFields.MLMVerification]: {
        quickScan: true,
        preScan: true
    }
    },
    { 
      id: uniqid(),
      name: "Auxillary Clean",
      mediaType: MediaType.LTOClean,
      [PartitionFields.SlotIQ]: true,
      [PartitionFields.BarcodeOptions]: {
        checkSumBehavior: CheckSumBehavior.CHECK,
        truncationOption: TruncationOptions.LEFT,
        numReportedChars: 16
      },
      [PartitionFields.Chambers]: {
        clean: 8
     },
     [PartitionFields.Drives]: [],
     [PartitionFields.CleaningPartition]: false,
     [PartitionFields.MLMVerification]: {
        quickScan: true,
        preScan: true
      }
    }
  ] );

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
      <Background container spacing={1}>
        <Grid item xs={ 3 } sx={{ maxHeight: '100%' }} >
          <PartitionsList
            partitions={ partitionList }
            onChange={ setPartitionList }
            createPartitionLink={ createPartitionLink }
          />
        </Grid>
        <Grid item xs={ 9 } sx={{ maxHeight: '100%' }}>
          <Outlet /> 
          <Routes>
            { partitionList.map( partition  => (
              <Route
                path={ `/${partition.id.replace(' ', '-')}/*` }
                element={ 
                  <PartitionDetail 
                    key={ partition.id } 
                    onChange={ partition => setPartitionList( [ ...partitionList.filter( iter => iter.id !== partition.id ), partition ] ) }
                    availablePartitions={ partitionList }
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
                  onChange={ partition => setPartitionList( [ ...partitionList, partition ] ) }
                  availablePartitions={ partitionList }
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
