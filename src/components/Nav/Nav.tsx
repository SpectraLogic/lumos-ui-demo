import * as React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';
import NavOuter from './NavOuter';
import NavInner from './NavInner';

interface INavProps {
}

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: columns;
  justify-content: left;
  height: 100%;
`;


export enum OuterSelection {
  LibraryStatus,
  Operations,
  Config
}

export enum InnerSelection {
  /* Operations */
  MoveMedia = "Move-Media",
  ImportExport = "Import-Export",
  ManageDrives = "Manage-Drives",
  RunTests = "Run-Tests",
  GatherLogs = "Gather-Logs",
  /* Configuration */
  Partitions = "Partitions",
  MediaLifecycle = "Media-Lifecycle",
  NetworkSettings = "Network-Settings",
  UserAccounts = "User-Accounts",
  MediaEncryption = "Media-Encryption",
  Updates = "Updates"

}

const Nav: React.FunctionComponent<INavProps> = (props) => {
  const [outerSelectionState, setOuterSelectionState] = React.useState( OuterSelection.Config );
  const [innerSelectionState, setInnerSelectionstate] = React.useState( InnerSelection.Partitions );


  return(
      <Wrapper>
        <NavBar/>
        <NavWrapper>
          <NavOuter selection={ outerSelectionState } onSelectionChange={ setOuterSelectionState }  />
          <NavInner
            outerSelection={ outerSelectionState }
            innerSelection={ innerSelectionState }
            onInnerSelectionChange={ setInnerSelectionstate }
          />
        </NavWrapper>
       {props.children}
      </Wrapper>
  );
};

export default Nav;
