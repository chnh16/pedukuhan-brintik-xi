import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Organisasi from './Organisasi';
import Fasilitas from './Fasilitas';
import Daftar from './Daftar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav className="header" />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/organisasi" component={Organisasi} />
        <Route path="/fasilitas" component={Fasilitas} />
        <Route path="/daftar" component={Daftar} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
