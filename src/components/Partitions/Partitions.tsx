import * as React from 'react';
import styled from 'styled-components';
import { Grid, Zoom } from '@mui/material';
import PartitionsList, { IPartitionsListProps } from '../PartitionList/ParitionsList';
import { Routes, Route, Outlet } from 'react-router-dom'; 
import IPartition, { CheckSumBehavior, MediaType, TruncationOptions } from '../../interfaces/IPartition';
import PartitionDetail from '../PartitionDetail/PartitionDetail';
import PartitionFields from '../PartitionDetail/PartitionFields';

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
      [PartitionFields.CleaningPartition]: "2",
      [PartitionFields.MLMVerification]: {
        quickScan: true,
        preScan: true
      }
    },
    { 
      id: "2",
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
      id: "3",
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
                path={ `/${partition.id.replace(' ', '-')}` }
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
              path={ createPartitionLink }
              element={ <p> create partition </p>}
              />
          </Routes>
        </Grid>
      </Background>
  );
};

export default Partitions;
