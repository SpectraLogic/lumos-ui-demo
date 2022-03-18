import * as React from 'react';
import FieldAccordion, { ValueText } from '../FieldAccordion';
import PartitionFields from '../PartitionFields';

interface ISoftLoadProps {
}

const SoftLoad: React.FunctionComponent<ISoftLoadProps> = (props) => {
  return(
      <FieldAccordion 
        panelTitle={ PartitionFields.SoftLoad }
        headerSubText={ <ValueText>Enabled</ValueText> }
        detailsContent={ <> todo </> }  
        isAdvancedSetting
    />
  );
};

export default SoftLoad;
