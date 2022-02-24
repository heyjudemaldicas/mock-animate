import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={ Home } exact />
        <Route path="/about" component={ About } />
      </div>
    </Router>
  );
}

export default App;
