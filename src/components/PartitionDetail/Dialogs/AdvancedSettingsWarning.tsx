import { Button, ButtonGroup, Dialog, DialogActions, DialogContent, DialogContentText, DialogProps, DialogTitle, Typography } from '@mui/material';
import { Warning } from '@mui/icons-material';
import styled from 'styled-components';
import * as React from 'react';

interface IAdvancedSettingsWarningProps extends DialogProps{
    onCancel: () => void
    onConfirm: () => void
}

const DialogHeader = styled.div`
    display: flex;
    flex-direction: row;
`;

const DialogHeaderIcon = styled.div`
    margin-left: auto; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 15px;
`

const AdvancedSettingsWarning: React.FunctionComponent<IAdvancedSettingsWarningProps> = (props) => {
  return(
      <Dialog { ...props } >
          <DialogHeader>
            <DialogTitle>
                Advanced Partition Settings 
            </DialogTitle>
            <DialogHeaderIcon>
                <Warning color='warning' />
            </DialogHeaderIcon>
          </DialogHeader>
          <DialogContent>
            <DialogContentText>
                    These settings allow you to control the library emulation for the partition.
                    The default preset is appropriate for most installations.
                    <br/> <br/>
                    Caution: Setting the library emulation incorrectly could cause compatibility
                    issues with your software package. Check with your software vendor or
                    Spectra Logic technical support before changing these settings.
            </DialogContentText>
          </DialogContent>

          <DialogActions>
              <ButtonGroup fullWidth>
                <Button variant='contained' onClick={ props.onCancel }>
                    Cancel
                </Button>
                 &nbsp; &nbsp;
                <Button variant='outlined' color='error' onClick={ props.onConfirm }>
                    I Understand
                </Button>
              </ButtonGroup>
          </DialogActions>
      </Dialog>
  );
};

export default AdvancedSettingsWarning;
