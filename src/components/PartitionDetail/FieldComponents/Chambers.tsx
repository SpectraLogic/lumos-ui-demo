import { Grid, Stack, TextField, Typography } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';
import { IChambersConfig } from '../../../interfaces/IPartition';
import FieldAccordion, { ValueText } from '../FieldAccordion';
import PartitionFieldProps from '../PartitionFieldProps';
import PartitionFields from '../PartitionFields';

interface IChambersProps extends PartitionFieldProps<IChambersConfig> {
}

const TextContainer = styled( Typography )`
    position: absolute;
    display: flex;
    justify-content: center;
    top: 50%;
    transform: translate( 0px, -50% );
`;

const Chambers: React.FunctionComponent<IChambersProps> = (props) => {
  return (
      <FieldAccordion
        panelTitle={ PartitionFields.Chambers }
        headerSubText={ (
            <>
                Storage: <ValueText>{ props.value.storage }</ValueText> &nbsp; &nbsp;
                Entry/Exit: <ValueText>{ props.value.ee }</ValueText>
            </>
        ) }
        detailsContent={ (
            <Grid container spacing={2}>
                <Grid item xs={ 9 } sx={{ position: 'relative' }}>
                    <TextContainer variant='body2'>
                        Slots are allocated to partitions on a chamber basis. Partitions must allocate chambers for both storage and entry/exit. For the media type of this library there are 10 slots per chamber.
                        <br/> <br/>
                        A maximum of 294 chambers can be allocated to this partition. Note that the library will use available empty chambers to optimize robotic motion. If you allocate no more than 292 chambers to this partition, the speed at which tape movement operations can be executed may be increased.
                    </TextContainer>
                </Grid>
                <Grid item xs={ 3 }>
                    <Stack spacing={ 4 }>
                        <TextField 
                            variant='outlined'
                            label='Storage'
                            value={ props.value.storage }
                            onChange={ e => props.onValueChange( { ...props.value, storage: Number(e.target.value) } ) }
                        />
                        <TextField 
                            variant='outlined'
                            label='Entry/Exit'
                            value={ props.value.ee }
                            onChange={ e => props.onValueChange( { ...props.value, ee: Number( e.target.value ) } ) }
                        />
                    </Stack>
                </Grid>
            </Grid>
        ) }
      />
  );
};

export default Chambers;
