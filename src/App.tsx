import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { AppBar, Container, Toolbar, ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';
import Login from './components/Login';
import styled from 'styled-components';
import Nav from './components/Nav';
import { InnerSelection } from './components/Nav/Nav';
import Partitions from './components/Partitions/Partitions';
import MovesManagement from './pages/MoveManagement/MoveManagement';
import IPartition from './interfaces/IPartition';
import { partitions as mockPartitions } from './assets/mock-data';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { muiThemeA, muiThemeB,
  baseThemeA, baseThemeB,
  baseThemeC, muiThemeC,
  baseThemeD, muiThemeD
   } from './assets/theme';
import { ThemeProvider  as SCThemeProvider} from 'styled-components';
import { useHotkeys } from 'react-hotkeys-hook';


const themes = [
  { base: baseThemeA, mui: muiThemeA },
  { base: baseThemeB, mui: muiThemeB },
  { base: baseThemeC, mui: muiThemeC },
  { base: baseThemeD, mui: muiThemeD }
]

function App() {
  const [partitions, setPartitions] = React.useState<IPartition[]>( mockPartitions );
  const [loggedIn, setLoggedIn] = React.useState<boolean>( false ); 
  const nav = useNavigate();

  const [themeIndex, setThemeIndex] = React.useState( 1 as number )

  useHotkeys( 'ctrl+1', () => {
    setThemeIndex( () =>  0 );
  });
  
  useHotkeys( 'ctrl+2', () => {
    setThemeIndex( () => 1 );
  });

  useHotkeys( 'ctrl+3', () => {
    setThemeIndex( () => 2 );
  });

  useHotkeys( 'ctrl+4', () => {
    setThemeIndex( () => 3 );
  });

  const theme = themes[themeIndex];

  return (
  <MuiThemeProvider theme={ createTheme( theme.mui ) }>
      <SCThemeProvider theme={ theme.base }>
        <AnimatePresence exitBeforeEnter>
          {
            !loggedIn && <Login onLogin={ () => { 
              nav( './Dashboard/');
              setLoggedIn( true );
            } } />
          }
        </AnimatePresence>
          {
            loggedIn && (
              <Nav 
                partitionsRoot={ <Partitions partitions={ partitions } onPartitionsChange={ setPartitions }/> }
                movesRoot={ <MovesManagement partitions={ partitions } /> }
              />
            )
          }
      </SCThemeProvider>
    </MuiThemeProvider>

  );
}

export default App;

