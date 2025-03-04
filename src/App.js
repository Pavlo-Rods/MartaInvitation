import React from 'react';
import './commoncss/bootstrap.css';
import './commoncss/font-icon.css';
import './App.css';
import Header from './components/Header';
import WeadingDate from './components/WeadingDate';
import CountDown from './components/CountDown';
import Weadingloaction from './components/Weadingloaction'
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
     <WeadingDate />
     <CountDown />
     <Weadingloaction />
     <Contact />
    </div>
  );
}

export default App;
