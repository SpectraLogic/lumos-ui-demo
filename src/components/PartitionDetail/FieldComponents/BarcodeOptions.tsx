import { Box, FormControl, Grid, Input, InputLabel, MenuItem, Select, Slider, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { CheckSumBehavior, IBarcodeOptions, TruncationOptions } from '../../../interfaces/IPartition';
import FieldAccordion, { ValueText } from '../FieldAccordion';
import PartitionFieldProps from '../PartitionFieldProps';
import PartitionFields from '../PartitionFields';


interface IBarcodeOptionsProps extends PartitionFieldProps<IBarcodeOptions>{
}

const BarcodeOptions: React.FunctionComponent<IBarcodeOptionsProps> = (props) => {
  return(
      <FieldAccordion
        panelTitle={ PartitionFields.BarcodeOptions}
        headerSubText={ 
            <>
                Behavior: <ValueText>{ props.value.checkSumBehavior }</ValueText> &nbsp; &nbsp;
                Truncation: <ValueText>{ props.value.truncationOption }</ValueText> &nbsp; &nbsp;
                No. Characters To Report: <ValueText>{ props.value.numReportedChars }</ValueText>
            </>
        }
        detailsContent={
            <Stack spacing={ 1 }>
                <Typography variant='body2'>
                    If the tape barcodes have a checksum character and you want the barcode validated, select 'Checksummed barcodes'. This validates the barcode with its checksum, but does not report it to the host or display through the library. To leave tape barcode checksum values unchecked and unreported, select 'Barcode checksum ignored.' If the tape barcodes do not have a checksum, select 'Non-checksummed barcodes'. This sends the barcode to the host and library display. To report a truncated barcode value, select how the barcodes are to be read (from the left or right) and the number of characters to be reported. NOTE: By default, the library expects the barcode to have a checksummed digit.
                </Typography>
                <Grid container spacing={ 2 } sx={{ maxWidth: '100%' }}>
                    <Grid item xs={ 4 }>
                        <FormControl fullWidth>
                            <InputLabel>Check sum behavior</InputLabel>
                            <Select value={ props.value.checkSumBehavior } onChange={ e => props.onValueChange({ ...props.value, checkSumBehavior: e.target.value as CheckSumBehavior })}>
                                { [CheckSumBehavior.CHECK, CheckSumBehavior.IGNORE, CheckSumBehavior.NON].map( val => (
                                    <MenuItem key={ val } value={ val }> { val } </MenuItem>
                                )) }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={ 4 }>
                        <FormControl fullWidth>
                            <InputLabel >Truncation behavior</InputLabel>
                            <Select 
                                value={ props.value.truncationOption } onChange={ e => props.onValueChange({ ...props.value, truncationOption: e.target.value as TruncationOptions })} >
                                { [TruncationOptions.LEFT, TruncationOptions.RIGHT].map( val => (
                                    <MenuItem key={ val } value={ val }> { val } </MenuItem>
                                )) }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={ 4 }>
                        <Box>

                             <Typography id="input-slider" gutterBottom>
                                 Number of characters to report
                            </Typography>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs>
                                    <Slider 
                                        value={ props.value.numReportedChars }
                                        onChange={ (e, val) => props.onValueChange({ ...props.value, numReportedChars: val as number } ) }
                                        min={ 1 }
                                        max={ 16 }
                                        step={ 1 }
                                        marks
                                    />
                                </Grid>
                                <Grid item>
                                    <Input
                                        value={ props.value.numReportedChars }
                                        size="small"
                                        onChange={ e => props.onValueChange({ ...props.value, 
                                            numReportedChars: Number(e.target.value) > 16 ? 16 : Number(e.target.value) < 1 ? 1 : Number(e.target.value) }) }
                                        inputProps={{
                                        step: 1,
                                        min: 1,
                                        max: 16,
                                        type: 'number',
                                        'aria-labelledby': 'input-slider',
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Stack>
        }
      />
  );
};

export default BarcodeOptions;
