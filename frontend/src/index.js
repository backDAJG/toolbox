import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import Page from './Page';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './store';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Page />
  </Provider>
);
