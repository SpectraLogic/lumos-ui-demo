import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppBar, Container, Toolbar } from '@mui/material';
import Login from './components/Login';
import styled from 'styled-components';
import Nav from './components/Nav';




function App() {
  return (
    <>
    
      <Nav>
        Content
      </Nav>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<p> Go Somewhere </p>} />
          <Route path="partitions" element={<p> hello, partiotns</p> } />
          <Route path="medialifecycle" element={ <p> media lifecycle </p> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
