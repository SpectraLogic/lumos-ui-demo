import * as React from 'react';
import FieldAccordion, { ValueText } from '../FieldAccordion';
import PartitionFields from '../PartitionFields';

interface ITaosProps {
}

const Taos: React.FunctionComponent<ITaosProps> = (props) => {
  return(
      <FieldAccordion 
        panelTitle={ PartitionFields.TAOS }
        headerSubText={ <ValueText>Enabled</ValueText> }
        detailsContent={ <> todo </> }  
        isAdvancedSetting
    />
  );
};

export default Taos;
