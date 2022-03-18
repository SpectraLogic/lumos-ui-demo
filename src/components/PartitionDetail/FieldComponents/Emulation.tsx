import * as React from 'react';
import FieldAccordion, { ValueText } from '../FieldAccordion';
import PartitionFields from '../PartitionFields';

interface IEmulationProps {
}

const Emulation: React.FunctionComponent<IEmulationProps> = (props) => {
  return(
      <FieldAccordion 
        panelTitle={ PartitionFields.Emulation }
        headerSubText={ <>Preset: <ValueText>SPECTRA PYTHON</ValueText></> }
        detailsContent={ <> todo </> }  
        isAdvancedSetting
    />
  );
};

export default Emulation;
