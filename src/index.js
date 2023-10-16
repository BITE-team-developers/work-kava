import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import 'modern-normalize';
import App from './components/App';
import { GlobalStyles, theme } from 'styles';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/work-kava">
        <Global styles={GlobalStyles} />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
