import * as React from 'react';
import PartitionFieldProps from '../PartitionFieldProps';
import  FieldAccordion  from '../FieldAccordion';
import PartitionFields from '../PartitionFields';
import styled from 'styled-components';
import { Grid, Typography, Divider, Switch, FormGroup as BaseFormGroup, FormControlLabel } from '@mui/material';
interface ISlotIQProps extends PartitionFieldProps<boolean> {
}

const ValueText = styled.span`
    color: #A68AF9;
`;

const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 100%;
`;

const FormGroup = styled( BaseFormGroup )`
  position: absolute;
  top: 50%;
  transform: translate(0px, -50%);
`;

const SlotIQ: React.FunctionComponent<ISlotIQProps> = (props) => {
  return (
    <FieldAccordion 
      panelTitle={ PartitionFields.SlotIQ }
      headerSubText={ 
        <ValueText>{ props.value ? "Enabled" : "Disabled" }</ValueText>
      }
      detailsContent={ 
        <Grid container>
          <Grid item xs={ 9 }>
            <Typography variant='body2'>
            SlotIQ optimizes robotics performance by allowing the library to virtualize tape locations and optimize the order of moves in a queue to reduce the amount of robotic movement required for any set of moves. The tape location virtualization is invisible to the host software. Slot to slot moves and drive to slot moves may both be virtualized, resulting in the tape inventory presented to the host software, or displayed on the Inventory screen, not matching the physical location of the tapes. If you export TeraPack magazines directly from the storage pool, the cartridges in the magazines may not match the sequential ordering presented by the host software. However, the TeraPack Magazine Contents field on the Advanced Import/Export screen shows the physical contents of the selected chamber. 
Note: You cannot enable SlotIQ if Tape Barcode Verification is on.
            </Typography>
          </Grid>
          <Grid item xs={ 3 }>
            <SwitchContainer>
              <FormGroup>
                <FormControlLabel 
                  label='Enable'
                  control={ <Switch 
                    checked={ props.value }
                    onChange={ () => props.onValueChange( !props.value ) }
                  /> }
                />
              </FormGroup>
            </SwitchContainer>
          </Grid>
        </Grid>
      }
    />
  );
};

export default SlotIQ;
