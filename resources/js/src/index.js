import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (document.getElementById('index')) {
    ReactDOM.render(
        <App />,
        document.getElementById('index')
    );
}
