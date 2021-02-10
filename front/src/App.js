import React, { useState } from 'react'

// Import routes system
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './styles/custom.scss';
import General from "./layouts/General";
import { SuspenseWithPerf } from 'reactfire';


function App() {
  return (
    <Router>
      <SuspenseWithPerf fallback={'Loading firebase status...'} traceId={'load-firebase-status'}>
        <div className="App">
          <General></General>
        </div>
      </SuspenseWithPerf>
      
    </Router>
    
  );
}

export default App;
