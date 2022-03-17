import { Grid, Stack, TextField, Typography } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';
import { ICleaningChambers, IMediaChambers, MediaType } from '../../../interfaces/IPartition';
import FieldAccordion, { ValueText } from '../FieldAccordion';
import PartitionFieldProps from '../PartitionFieldProps';
import PartitionFields from '../PartitionFields';

interface IChambersProps extends PartitionFieldProps<IMediaChambers | ICleaningChambers> {
    mediaType: MediaType
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
        headerSubText={ 
            props.mediaType === MediaType.LTOClean ? ( <> Cleaning: <ValueText> { (props.value as ICleaningChambers).clean }  </ValueText> </> ) :
            (
                <>
                    Storage: <ValueText>{ (props.value as IMediaChambers).storage }</ValueText> &nbsp; &nbsp;
                    Entry/Exit: <ValueText>{ (props.value as IMediaChambers).ee }</ValueText>
                </>
        ) }
        detailsContent={ (
            <Grid container spacing={2}>
                <Grid item xs={ 9 } sx={{ position: 'relative' }}>
                    <TextContainer variant='body2'>
                        { props.mediaType === MediaType.LTOClean ? (
                            <>  Select number of cleaning chambers </>
                        ) : (
                            <>
                                Slots are allocated to partitions on a chamber basis. Partitions must allocate chambers for both storage and entry/exit. For the media type of this library there are 10 slots per chamber.
                                <br/> <br/>
                                A maximum of 294 chambers can be allocated to this partition. Note that the library will use available empty chambers to optimize robotic motion. If you allocate no more than 292 chambers to this partition, the speed at which tape movement operations can be executed may be increased.
                            </>
                         ) 
                        }
                    </TextContainer>
                </Grid>
                <Grid item xs={ 3 }>
                    <Stack spacing={ 4 }>
                        {
                            props.mediaType === MediaType.LTOClean ? (
                                <TextField 
                                    variant='outlined'
                                    label='Cleaning Chambers'
                                    value={ (props.value as ICleaningChambers).clean }
                                    onChange={ e => props.onValueChange( { ...props.value, clean: Number(e.target.value) } ) }
                                />
                            ) : (
                                <>
                                    <TextField 
                                        variant='outlined'
                                        label='Storage'
                                        value={ (props.value as IMediaChambers).storage }
                                        onChange={ e => props.onValueChange( { ...props.value, storage: Number(e.target.value) } ) }
                                    />
                                    <TextField 
                                        variant='outlined'
                                        label='Entry/Exit'
                                        value={ (props.value as IMediaChambers).ee }
                                        onChange={ e => props.onValueChange( { ...props.value, ee: Number( e.target.value ) } ) }
                                    />
                                </>
                            )
                        }
                    </Stack>
                </Grid>
            </Grid>
        ) }
      />
  );
};

export default Chambers;
