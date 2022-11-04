import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

import theme from './theme/theme';

import { store } from './store';
import './fonts/EncodeSansCondensed-SemiBold.ttf';
import './fonts/Nunito-Bold.ttf';
import './fonts/Nunito-Regular.ttf';
import './fonts/Nunito-SemiBold.ttf';
import "./index.css";
import GlobalStyle from './theme/GlobalStyle';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <Provider store={store}>
       <ThemeProvider theme={theme}>
      <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
    </ThemeProvider>
    </Provider>
   
    
  </HelmetProvider>
);

// If you want to enable client cache, register instead.
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
