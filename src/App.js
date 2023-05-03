import React from 'react';
import Header from './components/Home/Header/Header';
import Welcome from './components/Home/Main/Welcome';
import Main from './components/Home/Main/Main';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import './css/app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/' element={
            <>  
              <Welcome />
              <Main />
            </>
          } />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;