// src/App.js

import React from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Header'; // Import the Header component

function App() {
  return (
    <div className="App">
      <Header />  {/* Add the Header component here */}
      <Dashboard />
    </div>
  );
}

export default App;
