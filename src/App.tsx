import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { AppBar, Container, Toolbar } from '@mui/material';
import Login from './components/Login';
import styled from 'styled-components';
import Nav from './components/Nav';
import { InnerSelection } from './components/Nav/Nav';

function App() {
  return (
    <>
      <Nav>
        <Outlet />
      </Nav>
      <Routes>
          <Route path={`/${InnerSelection.Partitions}`} element={<p> Partitions </p> } />
          <Route path={`/${InnerSelection.MediaLifecycle}`} element={<p> Display Component </p> } />
          <Route path={`/${InnerSelection.ImportExport}`} element={<p> Display Component </p> } />
          <Route path={`/${InnerSelection.ManageDrives}`} element={<p> Display Component </p> } />
          <Route path={`/${InnerSelection.RunTests}`} element={<p> Display Component </p> } />
          <Route path={`/${InnerSelection.UserAccounts}`} element={<p> Display Component </p> } />
          <Route path={`/${InnerSelection.NetworkSettings}`} element={<p> Display Component </p> } />
          <Route path={`/${InnerSelection.Updates}`} element={<p> Display Component </p> } />






      </Routes>
    </>
  );
}

export default App;
