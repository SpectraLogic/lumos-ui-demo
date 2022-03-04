import * as React from 'react';
import styled from 'styled-components';
import NavInner from './NavInner';
import NavOuter from './NavOuter';

export enum OuterSelection {
  LibraryStatus,
  Operations,
  Config
}

export enum InnerSelection {
  /* Operations */
  MoveMedia = "Move Media",
  ImportExport = "Import/Export",
  ManageDrives = "Manage Drives",
  RunTests = "Run Tests",
  GatherLogs = "Gather Logs",
  /* Configuration */
  Partitions = "Partitions",
  MediaLifecycle = "Media Lifecycle",
  NetworkSettings = "Network Settings",
  UserAccounts = "User Accounts",
  MediaEncryption = "Media Encryption",
  Updates = "Updates"

}

interface INavigatorProps {
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: columns;
  justify-content: left;
  height: 100%;
`;

const Navigator: React.FunctionComponent<INavigatorProps> = (props) => {
  const [outerSelectionState, setOuterSelectionState] = React.useState( OuterSelection.Config );
  const [innerSelectionState, setInnerSelectionstate] = React.useState( InnerSelection.Partitions );

  return(
    <Wrapper>
      <NavOuter selection={ outerSelectionState } onSelectionChange={ setOuterSelectionState }  />
      <NavInner
        outerSelection={ outerSelectionState }
        innerSelection={ innerSelectionState }
        onInnerSelectionChange={ setInnerSelectionstate }
      />
    </Wrapper>
  );
};

export default Navigator;
