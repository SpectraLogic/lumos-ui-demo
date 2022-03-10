import * as React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';
import NavOuter from './NavOuter';
import NavInner from './NavInner';
import { Outlet, Route, Routes } from 'react-router-dom';
import Partitions  from '../Partitions/Partitions';

interface INavProps {
}

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
`;

const NavWrapper = styled.div`
  position: absolute;
  top: 72px;
  display: flex;
  flex-direction: columns;
  justify-content: left;
  height: calc(100% - 72px);
  width: 100%;
`;

const StyledNavBar = styled(NavBar)`
  position: absolute;
  top: 0;
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
        <StyledNavBar/>
        
        <NavWrapper>
          <NavOuter selection={ outerSelectionState } onSelectionChange={ setOuterSelectionState }  />
          <NavInner
            outerSelection={ outerSelectionState }
            innerSelection={ innerSelectionState }
            onInnerSelectionChange={ setInnerSelectionstate }
          />
          <Outlet />
          <Routes>
            <Route path={`/${InnerSelection.Partitions}`} element={ <Partitions /> } />
            <Route path={`/${InnerSelection.MediaLifecycle}`} element={<p> Display Component </p> } />
            <Route path={`/${InnerSelection.ImportExport}`} element={<p> Display Component </p> } />
            <Route path={`/${InnerSelection.ManageDrives}`} element={<p> Display Component </p> } />
            <Route path={`/${InnerSelection.RunTests}`} element={<p> Display Component </p> } />
            <Route path={`/${InnerSelection.UserAccounts}`} element={<p> Display Component </p> } />
            <Route path={`/${InnerSelection.NetworkSettings}`} element={<p> Display Component </p> } />
            <Route path={`/${InnerSelection.Updates}`} element={<p> Display Component </p> } />
            <Route path={`/${InnerSelection.MoveMedia}`} element={<p> Display Component </p> } />
            <Route path={`/${InnerSelection.MediaEncryption}`} element={<p> Display Component </p> } />
          </Routes>
        </NavWrapper>
      </Wrapper>
  );
};

export default Nav;
