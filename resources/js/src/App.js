import React from 'react';

import TopBar from './components/TopBar';
import Header from './components/Header';
import Intro from './components/Intro';
import Main from './components/Main';
import { Footer } from './components/Footer';


function App() {
    return (
        <div className="App">
            <TopBar />
            <Header />
            <Intro />
            <Main />
            <Footer />
        </div>
    );
}

export default App;

