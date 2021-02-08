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
function App() {
  return (
    <div className="App">
      <General></General>
    </div>
  );
}

export default App;
