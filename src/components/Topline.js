import React from 'react';
import ToplineSideHeading from './ToplineSideHeading';

import { Link } from 'react-router-dom'

function TopLine() {
    return (
        <>
            <div className='topline-sticky topline-box colorSchema'>
                <div className='topline-content-box left-side-box'>
                    <Link className='topIconLink' to="/"><ToplineSideHeading headingType="textHeading" headingSide="left"/></Link>
                </div>

                <nav className='categoriesBar'>
                    <Link className="navbarLink colorSchema" to="/"><h2>Home</h2></Link>
                    <Link className="navbarLink colorSchema" to="/electronics"><h2>Electronics</h2></Link>
                    <Link className="navbarLink colorSchema" to="/jewelery"><h2>Jewelery</h2></Link>
                    <Link className="navbarLink colorSchema" to="/mensclothes"><h2>Men's clothes</h2></Link>
                    <Link className="navbarLink colorSchema" to="/womensclothes"><h2>Women's clothes</h2></Link>
                    <Link className="navbarLink colorSchema" to="/about"><h2>About Us</h2></Link>
                </nav>

                <div className='topline-content-box right-side-box'>
                    <Link className='topIconLink' to="/"><ToplineSideHeading headingType="iconHeading" headingSide="right" /></Link>
                </div>
            </div>
        </>
    )
}

export default TopLine