import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';
import { muiTheme, baseTheme } from './assets/theme';
import { ThemeProvider  as SCThemeProvider} from 'styled-components';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MuiThemeProvider theme={ createTheme(muiTheme) }>
        <SCThemeProvider theme={ baseTheme }>
          <App />
        </SCThemeProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
