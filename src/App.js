import React from 'react';
import './css/styles.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Navigation from './components/Navigation';


function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={About}/>
    </HashRouter>
  );
}

export default App;