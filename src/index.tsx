import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'components/Theme/ThemeContext';
import App from 'App/App';
import { setupStore } from 'store/store';
import { Provider } from 'react-redux';

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
