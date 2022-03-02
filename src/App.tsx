import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppBar, Container, Toolbar } from '@mui/material';
import Login from './components/Login';
import SpectraLogo from './assets/sllogo.gif';
import styled from 'styled-components';

const AppBarLogo = styled.img`
  height: 60px;
`

const CustomAppBar = styled(AppBar)`
  background-color: #fff;
`


function App() {
  return (
    <>
      <Login />
      {/* <CustomAppBar position='static'>
        <Container>
          <Toolbar disableGutters={ true }>
            <AppBarLogo src={ SpectraLogo } />
          </Toolbar>
        </Container>
      </CustomAppBar> */}
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
