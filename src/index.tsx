import React from 'react';
import * as ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import { StoreProvider } from './store';

ReactDOM.render(
    <StoreProvider>
        <App />
    </StoreProvider>, 
    document.getElementById('root')
);