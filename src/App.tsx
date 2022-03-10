import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { AppBar, Container, Toolbar } from '@mui/material';
import Login from './components/Login';
import styled from 'styled-components';
import Nav from './components/Nav';
import { InnerSelection } from './components/Nav/Nav';
import Partitions from './components/Partitions/Partitions';

function App() {
  return (
      <Nav />
  );
}

export default App;
