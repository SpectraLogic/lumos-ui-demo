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
      [PartitionFields.CleaningPartition]: "2"
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
        storage: 58,
        ee: 11
     },
     [PartitionFields.Drives]: [],
     [PartitionFields.CleaningPartition]: false
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
        storage: 246,
        ee: 17
     },
     [PartitionFields.Drives]: [],
     [PartitionFields.CleaningPartition]: false
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
                element={ 
                  <PartitionDetail 
                    key={ partition.id } 
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
