import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

import App from './components/App';
import { ActionCableProvider } from 'react-actioncable-provider'


ReactDOM.render(
  <ActionCableProvider url={'ws://localhost:3001/cable'}>
    <App />
  </ActionCableProvider>,
  document.getElementById('root')
);
