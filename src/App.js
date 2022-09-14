import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import './varDefinitions.css';
import './App.css';
import { APP_HOME_URL } from './constantExports/globalConstants'

import ToplineSideHeading from './components/ToplineSideHeading';
import HeadSKaT from './pages/HeadSKaT'
import ProvideProductDetails from './components/ProvideProductDetails'
import AboutUsPage from './pages/AboutUsPage'
import ErrorPage from './pages/ErrorPage'
// import GenerateCategories from './components/GenerateCategories'
import ProductLinesList from './components/ProductLinesList'

function App() {

    return (
        <>
            <div className='topline-sticky topline-box colorSchema'>
                <div className='topline-content-box left-side-box'>
                    <Link className='topIconLink' to={APP_HOME_URL}><ToplineSideHeading headingType="textHeading" headingSide="left"/></Link>
                </div>

                <nav className='categoriesBar'>
                    <Link className="navbarLink colorSchema" to={APP_HOME_URL}><h2>Home</h2></Link>
                    <ProductLinesList homeURL={APP_HOME_URL}/>
                    {/* <GenerateCategories homeURL={APP_HOME_URL}/> */}
                    <Link className="navbarLink colorSchema" to={`${APP_HOME_URL}about`}><h2>About Us</h2></Link>
                </nav>

                <div className='topline-content-box right-side-box'>
                    <Link className='topIconLink' to={APP_HOME_URL}><ToplineSideHeading headingType="iconHeading" headingSide="right" /></Link>
                </div>
                
            </div>

            <div className="routesList">
                <Routes>
                    <Route path={APP_HOME_URL} element={<HeadSKaT />}></Route>
                    <Route path={`${APP_HOME_URL}about`} element={<AboutUsPage />}></Route>
                    <Route path={`${APP_HOME_URL}productLine/products`} element={<ProvideProductDetails />}></Route>
                    <Route path='*' element={<ErrorPage />}></Route>
                </Routes>
            </div>
            
        </>
    )
}

export default App