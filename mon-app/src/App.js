import logo from './logo.svg';
import React from 'react';
import './App.css';
import {List} from './components/list.js';
import {Bouton} from './components/bouton.js';
import {Bouton2} from './components/bouton2.js';
import {Bouton3} from './components/bouton3.js';
import {Form} from './components/formulaire.js';

function App() {
  const laListe = <List/>;
  const leBouton = <Bouton/>;
  const leBouton2 = <Bouton2 value="Click on me !"/>;
  const leBouton3 = <Bouton3/>;
  const laForme = <Form/>;
  
  return (
    <div>
      { laListe }
      <br/>
      { leBouton }
      <br/>
      { leBouton2 }
      <br/>
      { leBouton3 }
      <br/><br/><br/>
      { laForme }
    </div>
  );
}

export default App;
