import React, { useState } from 'react';
import './varDefinitions.css';
import './App.css';
import './styles.scss';

import TopLine from './components/Topline'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HeadSKaT from './pages/HeadSKaT'
import ShowActualPage from './components/ShowActualPage'
import AboutUsPage from './pages/AboutUsPage'
import ErrorPage from './pages/ErrorPage'
import categoriesData from "./data/categories.JSON"

// Here we go..
function App() {

  return (
    <>
        <BrowserRouter>
          <TopLine />

          <Routes>
            <Route exact path='/' element={<HeadSKaT />} />
            <Route path='/about' element={<AboutUsPage />} />
            <Route path='/electronics' element={<ShowActualPage productLine={"electronics"} />} />
            <Route path='/jewelery' element={<ShowActualPage productLine={"jewelery"} />} />
            <Route path='/mensclothes' element={<ShowActualPage productLine={"men's clothing"} />} />
            <Route path='/womensclothes' element={<ShowActualPage productLine={"women's clothing"} />} />
            <Route path='*' element={<ErrorPage />}  />
          </Routes>

        </BrowserRouter>
    </>
  );
}

export default App;
