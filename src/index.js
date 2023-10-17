import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { createRoot } from 'react-dom/client';
import './reset.css';
import './index.css';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(<Provider store={store}>
    <App />
</Provider>);
