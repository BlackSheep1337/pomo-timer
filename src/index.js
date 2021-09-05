import { render } from 'react-dom';
import AppProvider from './contextAPP/context';
import App from './App';

render (
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);
