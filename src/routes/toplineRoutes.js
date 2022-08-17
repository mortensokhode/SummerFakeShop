import React from 'react'

import { Routes, Route} from 'react-router-dom'

import Home from '../pages/Home'
import AboutUsPage from '../pages/AboutUsPage'
import Electronics from '../pages/Electronics'
import Jewelry from '../pages/Jewelry'
import MensClothes from '../pages/MensClothes'
import WomensClothes from '../pages/WomensClothes'
import ErrorPage from '../pages/ErrorPage'
import TopLine from '../components/Topline'
import HeadSKaT from '../components/HeadSKaT'

const ToplineRoutes = () => {
  return (
    <>
      <TopLine />
      <HeadSKaT />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUsPage />} />
        <Route path='/electronics' element={<Electronics />} />
        <Route path='/jewelry' element={<Jewelry />} />
        <Route path='/mensclothes' element={<MensClothes />} />
        <Route path='/womensclothes' element={<WomensClothes />} />
        <Route path='*' element={<ErrorPage />}  />
      </Routes>
    </>
  );
};

export default ToplineRoutes;
