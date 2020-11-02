import logo from './logo.svg';
import React from 'react';
import './App.css';
import {List} from './components/list.js';

function App() {
  const laListe = <List/>;
  
  return (
    <div>
      { laListe }
    </div>
  );
}

export default App;
