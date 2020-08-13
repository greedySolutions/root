import React from 'react';

import TopBar from './components/TopBar';
import Header from './components/Header';
import Intro from './components/Intro';
import Main from './components/Main';


function App() {
    return (
        <div className="App">
            <TopBar />
            <Header />
            <Intro />
            <Main />
        </div>
    );
}

export default App;

