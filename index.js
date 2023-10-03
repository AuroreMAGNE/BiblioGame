import React, {createElement} from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './src/App';

const domContainer = document.querySelector('#mainContent');
const root = ReactDOM.createRoot(domContainer);
root.render(createElement(App));