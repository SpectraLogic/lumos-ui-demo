import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { AppBar, Container, Toolbar } from '@mui/material';
import Login from './components/Login';
import styled from 'styled-components';
import Nav from './components/Nav';
import { InnerSelection } from './components/Nav/Nav';
import Partitions from './components/Partitions/Partitions';
import MovesManagement from './pages/MoveManagement/MoveManagement';
import IPartition from './interfaces/IPartition';
import { partitions as mockPartitions } from './assets/mock-data';
import { useNavigate } from 'react-router-dom';

function App() {
  const [partitions, setPartitions] = React.useState<IPartition[]>( mockPartitions );
  const [loggedIn, setLoggedIn] = React.useState<boolean>( false ); 
  const nav = useNavigate();
  return (
    <>
      {
        !loggedIn && <Login onLogin={ () => {
          nav( './Partitions');
          setLoggedIn( true );
         } } />
      }
      {
        loggedIn && (
          <Nav 
            partitionsRoot={ <Partitions partitions={ partitions } onPartitionsChange={ setPartitions }/> }
            movesRoot={ <MovesManagement partitions={ partitions } /> }
          />
        )
      }


    </>

  );
}

export default App;

