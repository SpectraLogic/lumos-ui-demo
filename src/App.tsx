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
    </>
    // <BrowserRouter>
    //   <Routes>
    //   <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="blogs" element={<Blogs />} />
    //       <Route path="contact" element={<Contact />} />
    //       <Route path="*" element={<NoPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       Lumos UI
    //     </p>
    //   </header>
    // </div>
  );
}

export default App;
