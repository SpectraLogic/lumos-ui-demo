import * as React from 'react';
import NavOuter from './NavOuter';

export enum OuterSelection {
  LibraryStatus,
  Operations,
  Config
}

interface INavigatorProps {
}

const Navigator: React.FunctionComponent<INavigatorProps> = (props) => {
  const [OuterSelectionState, SetOuterSelectionState] = React.useState( OuterSelection.Config );

  return(
      <NavOuter selection={ OuterSelectionState } onSelectionChange={ SetOuterSelectionState }  />
  );
};

export default Navigator;
