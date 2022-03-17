import { Chip, Grid } from '@mui/material';
import * as React from 'react';
import FieldAccordion, { CenteredText, ValueText } from '../FieldAccordion';
import PartitionFieldProps from '../PartitionFieldProps';
import PartitionFields from '../PartitionFields';
import styled from 'styled-components';
import { Check } from '@mui/icons-material';

interface IDrivesProps extends PartitionFieldProps<Array<string>>{
}

const ChipContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
    gap: 10px;
    justify-content: flex-end;
`;

const AVAILABLE_DRIVES: Array<string> = [
    "FR2/DBA5/fLTO-DRV1",
    "FR3/DBA4/fLTO-DRV1",
    "FR2/DBA5/fLTO-DRV2",
    "FR2/DBA5/fLTO-DRV3",
    "FR4/DBA5/fLTO-DRV2",
    "FR2/DBA5/fLTO-DRV5",
    "FR1/DBA5/fLTO-DRV2",
    "FR1/DBA5/fLTO-DRV3",
    "FR5/DBA5/fLTO-DRV2",
    "FR1/DBA3/fLTO-DRV2",
    "FR1/DBA2/fLTO-DRV1",
    "FR1/DBA1/fLTO-DRV3",
    "FR2/DBA3/fLTO-DRV4"
];



const DrivesSelector: React.FunctionComponent<PartitionFieldProps<Array<string>>> = props => {
    const onDriveChipClicked = ( drive: string, driveIsSelected: boolean) => {
        if( driveIsSelected ){
            props.onValueChange( props.value.filter( val => val !== drive ) );
        }else{
            props.onValueChange(  [...props.value, drive] );
        }
    }

    return(
        <>
            {
                AVAILABLE_DRIVES.map( drive => {
                    const selected = props.value.includes( drive );
                    return (
                        <Chip 
                            key={ drive }
                            label={ drive }
                            variant={ selected ? undefined : 'outlined' }
                            avatar={ selected ? <Check /> : undefined }
                            onClick={ (e) => onDriveChipClicked( drive, selected ) }
                            sx={ selected ? undefined : { paddingLeft: "21px" } }
                        />
                    )
                } )
            }
        </>
    )
}

const Drives: React.FunctionComponent<IDrivesProps> = (props) => {
  return(
    <FieldAccordion 
        panelTitle={ PartitionFields.Drives }
        headerSubText={ 
            <>Drives: <ValueText> { props.value.length } </ValueText></>
         }
         detailsContent={
             <Grid container spacing={ 2 }>
                 <Grid item xs={ 5 } sx={{ position: 'relative' }}>
                     <CenteredText>
                         Choose the drives this partition will use. NOTE: Removing/Adding drives may change the LUN mapping of the remaining devices exported via the QIP. You may need to reconfigure your host software. Mixing LTO SCSI and LTO3 Fibre drives in a single partition is not allowed
                     </CenteredText>
                 </Grid>
                 <Grid item xs={ 7 }>
                    <ChipContainer>
                        <DrivesSelector 
                            { ...props }
                        />
                    </ChipContainer>
                 </Grid>
             </Grid>
         }
    />
  );
};

export default Drives;
