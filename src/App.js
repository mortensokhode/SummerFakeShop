import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import './varDefinitions.css';
import './App.css';

import ToplineSideHeading from './components/ToplineSideHeading';
import HeadSKaT from './pages/HeadSKaT'
import ShowActualPage from './components/ShowActualPage'
import AboutUsPage from './pages/AboutUsPage'
import ErrorPage from './pages/ErrorPage'
import GenerateCategories from './components/GenerateCategories'

function App() {

    return (
        <>
            <div className='topline-sticky topline-box colorSchema'>
                <div className='topline-content-box left-side-box'>
                    <Link className='topIconLink' to="/"><ToplineSideHeading headingType="textHeading" headingSide="left"/></Link>
                </div>

                <nav className='categoriesBar'>
                    <Link className="navbarLink colorSchema" to="/"><h2>Home</h2></Link>
                    <GenerateCategories />
                    <Link className="navbarLink colorSchema" to="/about"><h2>About Us</h2></Link>
                </nav>

                <div className='topline-content-box right-side-box'>
                    <Link className='topIconLink' to="/"><ToplineSideHeading headingType="iconHeading" headingSide="right" /></Link>
                </div>
                
            </div>

            <div className="routesList">
                <Routes>
                    <Route exact path='/' element={<HeadSKaT />}></Route>
                    <Route path='/about' element={<AboutUsPage />}></Route>
                    <Route path='/services/products' element={<ShowActualPage />}></Route>
                    {/* <Route path='/electronics' element={<ShowActualPage productLine={"electronics"} />}></Route>
                    <Route path='/jewelery' element={<ShowActualPage productLine={"jewelery"} />}></Route>
                    <Route path='/mensclothing' element={<ShowActualPage productLine={"men's clothing"} />}></Route>
                    <Route path='/womensclothing' element={<ShowActualPage productLine={"women's clothing"} />}></Route> */}
                    <Route path='*' element={<ErrorPage />}></Route>
                </Routes>
            </div>
            
        </>
    )
}

export default App