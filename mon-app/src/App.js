import logo from './logo.svg';
import React from 'react';
import './App.css';
import {List} from './components/list.js';
import {Bouton} from './components/bouton.js';
import {Bouton2} from './components/bouton2.js';

function App() {
  const laListe = <List/>;
  const leBouton = <Bouton/>;
  const leBouton2 = <Bouton2 value="Click on me !"/>;
  
  return (
    <div>
      { laListe }
      <br/>
      { leBouton }
      <br/>
      { leBouton2 }
    </div>
  );
}

export default App;
