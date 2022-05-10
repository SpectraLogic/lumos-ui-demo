import * as React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';
import NavOuter from './NavOuter';
import NavInner from './NavInner';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Partitions  from '../Partitions/Partitions';
import IPartition, { MediaType } from '../../interfaces/IPartition';
import { MoveManagement } from '../../pages';
import Login from '../Login';
import { motion, AnimatePresence } from 'framer-motion';
import OverlapPanel from '../OverlapPanel/OverlapPanel';
import NavSheet from './NavSheet/NavSheet';

interface INavProps {
   partitionsRoot: React.ReactElement
   movesRoot: React.ReactElement
}

const Wrapper = styled( motion.div )`
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
  const [navPanelIsOpen, setNavPanelIsOpen] = React.useState( false );
  const location = useLocation();

  return(
      <Wrapper
        initial={{ display: 'none', opacity: 0 }}
        animate={{ display: '', opacity: 1, transition: { delay: 1.66 } }}
        transition={{ type: 'tween', duration: 1 }}
      >
        <OverlapPanel
          squishOversheet={ false }
          isOpen={ navPanelIsOpen }
          underSheetHeightPeek={ 60 }
          underSheetHeightTotal={ 465 }
          underSheetElement={ 
            <NavSheet 
              isOpen={ navPanelIsOpen }
              onOpenToggle={ () => setNavPanelIsOpen( !navPanelIsOpen ) }
              location={ innerSelectionState } 
            /> }
          overSheetElement={ 
            <>
            <Outlet />
              <Routes >
                <Route path={`/${InnerSelection.Partitions}/*`} element={ props.partitionsRoot } />
                <Route path={`/${InnerSelection.MediaLifecycle}`} element={<p> Display Component </p> } />
                <Route path={`/${InnerSelection.ImportExport}`} element={<p> Display Component </p> } />
                <Route path={`/${InnerSelection.ManageDrives}`} element={<p> Display Component </p> } />
                <Route path={`/${InnerSelection.RunTests}`} element={<p> Display Component </p> } />
                <Route path={`/${InnerSelection.UserAccounts}`} element={<p> Display Component </p> } />
                <Route path={`/${InnerSelection.NetworkSettings}`} element={<p> Display Component </p> } />
                <Route path={`/${InnerSelection.Updates}`} element={<p> Display Component </p> } />
                <Route path={`/${InnerSelection.MoveMedia}/*`} element={ props.movesRoot } />
                <Route path={`/${InnerSelection.MediaEncryption}`} element={<p> Display Component </p> } />
              </Routes>
            </>
          }
        /> 
        {/* <StyledNavBar/> */}
        
        {/* <NavWrapper> */}
          {/* <NavOuter selection={ outerSelectionState } onSelectionChange={ setOuterSelectionState }  />
          <NavInner
            outerSelection={ outerSelectionState }
            innerSelection={ innerSelectionState }
            onInnerSelectionChange={ setInnerSelectionstate }
          /> */}

        {/* </NavWrapper> */}
      </Wrapper>
  );
};

export default Nav;
