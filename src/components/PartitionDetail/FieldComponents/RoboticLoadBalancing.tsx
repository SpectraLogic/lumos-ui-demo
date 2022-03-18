import * as React from 'react';
import FieldAccordion, { ValueText } from '../FieldAccordion';
import PartitionFields from '../PartitionFields';

interface IRoboticLoadBalancingProps {
}

const RoboticLoadBalancing: React.FunctionComponent<IRoboticLoadBalancingProps> = (props) => {
  return(
      <FieldAccordion 
        panelTitle={ PartitionFields.RoboticLoadBalancing }
        headerSubText={ <ValueText>Enabled</ValueText> }
        detailsContent={ <> todo </> }  
        isAdvancedSetting
    />
  );
};

export default RoboticLoadBalancing;
