/*following imports include...
  - React
  - BrowerserRouter to keep UI in sync with URL
  - Google font imports
  - Golbal styles 
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './App';
import GlobalStyle from './GlobalStyles'


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
