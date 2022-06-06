import { FormControl, Grid, MenuItem, Select, Typography } from '@mui/material';
import _, { partition } from 'lodash';
import * as React from 'react';
import IPartition, { MediaType } from '../../../interfaces/IPartition';
import FieldAccordion, { CenteredText, ValueText } from '../FieldAccordion';
import PartitionFieldProps from '../PartitionFieldProps';
import PartitionFields from '../PartitionFields';

interface ICleaningPartitionProps extends PartitionFieldProps<string | false> {
    availablePartitions: Array<IPartition>
}

const CleaningPartition: React.FunctionComponent<ICleaningPartitionProps> = ({ availablePartitions: partitions, value: partitionId, onValueChange }) => {
  return (
      <FieldAccordion 
        panelTitle={ PartitionFields.CleaningPartition }
        headerSubText={ !partitionId ? <> None </> : (
            <ValueText>
                { _.find( partitions, ( iter => iter.id === partitionId ) )?.name }
            </ValueText>
        ) }
        detailsContent={ 
            <Grid container spacing={ 2 }>
                <Grid item xs={ 6 } sx={{ position: 'relative' }}>
                    {/* <CenteredText> */}
                    <Typography>
                        Choose the cleaning partition that this partition will use for auto drive cleaning. 
                        <br/> <br/>
                        Choose None to disable auto drive cleaning for this partition.
                    </Typography>
                    {/* </CenteredText> */}
                </Grid>
                <Grid item xs={ 6 }>
                    <FormControl fullWidth>
                        <Select value={ partitionId ? partitionId : "none"} onChange={ (e) => onValueChange( e.target.value !== "none" ? e.target.value : false) }>
                            <MenuItem value={ "none" }>
                                None
                            </MenuItem>
                            {
                                partitions.filter( iter => iter.mediaType === MediaType.LTOClean ).map( iter => (
                                    <MenuItem key={ iter.id } value={ iter.id }>
                                        { iter.name }
                                    </MenuItem>
                                ) )
                            }
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        }
      />
  );
};

export default CleaningPartition;
