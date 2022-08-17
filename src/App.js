import React from 'react';
import './varDefinitions.css';
import './App.css';
import './styles.scss';

import TopLine from './components/Topline'
import { HashRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/HeadSKaT'
import AboutUsPage from './pages/AboutUsPage'
import Electronics from './pages/Electronics'
import Jewelry from './pages/Jewelry'
import MensClothes from './pages/MensClothes'
import WomensClothes from './pages/WomensClothes'
import ErrorPage from './pages/ErrorPage'

// Here we go..
function App() {
  return (
    <div className="App">
        <HashRouter>
          <TopLine />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutUsPage />} />
            <Route path='/electronics' element={<Electronics />} />
            <Route path='/jewelry' element={<Jewelry />} />
            <Route path='/mensclothes' element={<MensClothes />} />
            <Route path='/womensclothes' element={<WomensClothes />} />
            <Route path='*' element={<ErrorPage />}  />
          </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
