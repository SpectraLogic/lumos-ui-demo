import * as React from 'react';
import FieldAccordion, { ValueText } from '../FieldAccordion';
import PartitionFields from '../PartitionFields';

interface IEmulationOptionsProps {
}

const EmulationOptions: React.FunctionComponent<IEmulationOptionsProps> = (props) => {
  return(
      <FieldAccordion 
        panelTitle={ PartitionFields.EmulationOptions }
        headerSubText={ <>Include tape generation in Read Element Status: <ValueText>Enabled</ValueText></> }
        detailsContent={ <> todo </> }  
        isAdvancedSetting
    />
  );
};

export default EmulationOptions;
