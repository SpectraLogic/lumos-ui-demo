import * as React from 'react';
import FieldAccordion, { ValueText } from '../FieldAccordion';
import PartitionFields from '../PartitionFields';

interface IMediaZoningProps {
}

const MediaZoning: React.FunctionComponent<IMediaZoningProps> = (props) => {
  return(
      <FieldAccordion 
        panelTitle={ PartitionFields.MediaZoning }
        headerSubText={  <ValueText>Enabled</ValueText> }
        detailsContent={ <> todo </> }  
        isAdvancedSetting
    />
  );
};

export default MediaZoning;
