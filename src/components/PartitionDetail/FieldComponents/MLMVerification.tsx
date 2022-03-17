import { FormControl, FormControlLabel, FormGroup, FormHelperText, Grid, Stack, Switch, Typography } from '@mui/material';
import * as React from 'react';
import { IMLMVerificationConfig } from '../../../interfaces/IPartition';
import FieldAccordion, { ValueText } from '../FieldAccordion';
import PartitionFieldProps from '../PartitionFieldProps';
import PartitionFields from '../PartitionFields';

interface IMLMVerificationProps extends PartitionFieldProps<IMLMVerificationConfig> {
}

const MLMVerification: React.FunctionComponent<IMLMVerificationProps> = (props) => {
  return(
    <FieldAccordion 
        panelTitle={ PartitionFields.MLMVerification }
        headerSubText={ 
            <>
                PreScan: <ValueText> {props.value.preScan ? "Enabled" : "Disabled"} </ValueText>
                &nbsp; &nbsp;
                PostScan: <ValueText> QuickScan { props.value.quickScan ? "Enabled" : "Disabled" } </ValueText>
            </>
        }
        detailsContent={
            <Grid container spacing={ 2 }>
                <Grid item xs={ 6 }>
                    <Stack spacing={ 2 }>
                        <Typography variant='body2'>
                            If you enable PreScan or PostScan, set the backup software timeout for tape mounts/unmounts to at least 15 minutes.
                        </Typography>
                        <FormControl fullWidth >
                            <FormGroup>
                                <FormControlLabel 
                                    control={ 
                                        <Switch checked={ props.value.preScan } onChange={ (e) => props.onValueChange({ ...props.value, preScan: e.target.checked }) } />
                                    }
                                    label="PreScan"
                                />
                            </FormGroup>
                            <FormHelperText>
                                Performs a basic functionality test and health check on each imported cartridge.
                            </FormHelperText>
                        </FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={ 6 }>
                    <Stack spacing={ 2 }>
                        <Typography variant='body2'>
                            PostScan: Performs a readability verification test on each cartridge. To enable PostScan, select QuickScan and select one or more triggers which specify when a PostScan should occur.                        </Typography>
                        <FormControl fullWidth >
                            <FormGroup>
                                <FormControlLabel 
                                    control={ 
                                        <Switch checked={ props.value.quickScan } onChange={ (e) => props.onValueChange({ ...props.value, quickScan: e.target.checked }) } />
                                    }
                                    label="QuickScan"
                                />
                            </FormGroup>
                            <FormHelperText>
                                Uses drives within the partition to perform verification tests. Normal moves will be delayed up to 3 minutes when cartridges are being verified.                            </FormHelperText>
                        </FormControl>
                    </Stack>
                </Grid>


            </Grid>
        }
    />
  );
};

export default MLMVerification;
