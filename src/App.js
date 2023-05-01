import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Main from './components/Main';
import './css/app.css'

function App() {
  return (
    <div className="app">
      <Header/>
      <Welcome/>
      <Main/>
    </div>
  );
}

export default App;