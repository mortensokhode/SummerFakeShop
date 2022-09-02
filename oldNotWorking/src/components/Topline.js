import React from 'react';
import LeftHeading from "./LeftHeading";
import RightHeading from "./RightHeading";
import { Link } from 'react-router-dom'

function TopLine() {
    return (
        <>
            <div className='topline-sticky topline-box'>
                <div className='topline-content-box left-side-box'>
                    <Link className='topIconLink' to="/"><LeftHeading /></Link>
                </div>

{/* I en annen sammenheng ville jeg ha definert navbar'en som en dynamisk bygget komponent med data fra APIet. 
    Dette for å forhindre problemene som et datadrevet system vil møte når man overstyrer denne dynamikken med statisk styringsinformasjon som nedenfor.
    Her blir det i denne omgang likevel noen snarveier som går på bekostning av faktisk brukskvalitet.
*/}

                <nav className='categoriesBar'>
                    <Link className="navbarLink" to="/"><h2>Home</h2></Link>
                    <Link className="navbarLink" to="/electronics"><h2>Electronics</h2></Link>
                    <Link className="navbarLink" to="/jewelry"><h2>Jewelry</h2></Link>
                    <Link className="navbarLink" to="/mensclothes"><h2>Men's clothes</h2></Link>
                    <Link className="navbarLink" to="/womensclothes"><h2>Women's clothes</h2></Link>
                    <Link className="navbarLink" to="/about"><h2>About Us</h2></Link>
                </nav>

                <div className='topline-content-box right-side-box'>
                    <Link className='topIconLink' to="/"><RightHeading /></Link>
                </div>
            </div>
        </>
    )
}

export default TopLine