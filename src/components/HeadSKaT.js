import React from 'react'
import IngressBox from './IngressBox'
import DetailsBox from './DetailsBox'
import { Link } from 'react-router-dom'

const HeadSKaT = () => {
  return (
    <div className='HeadSKaT-box'>
        <nav className='categoriesBar'>
            <Link className="navbarLink" to="/"><h2>Home</h2></Link>
            <Link className="navbarLink" to="/electronics"><h2>Electronics</h2></Link>
            <Link className="navbarLink" to="/jewelry"><h2>Jewelry</h2></Link>
            <Link className="navbarLink" to="/mensclothes"><h2>Men's clothes</h2></Link>
            <Link className="navbarLink" to="/womensclothes"><h2>Women's clothes</h2></Link>
            <Link className="navbarLink" to="/about-us"><h2>About Us</h2></Link>
        </nav>
        <div className='topSpace'></div>
        <div className='IngressRamme'>
            <div className='IngressOuter blurredShadow' onClick={detailShow}>
                <div className='IngressBoks'>
                    <h2 className='IngressHeading'>
                        "Something No.1"<br /><br />
                    </h2>
                    <h3 className='IngressText'>
                        "Text line no.1"  <br />
                        "Text line no.2"  <br />
                        "Text line no.3"  <br />
                        "Text line no.4"  <br />
                    </h3>
                </div>
            </div>
            <div className='IngressOuter blurredShadow' onClick={detailShow}>
                <div className='IngressBoks'>
                <h2 className='IngressHeading'>
                    "Something No.2"<br /><br />
                    </h2>
                    <h3 className='IngressText'>
                        "Text line no.1"  <br />
                        "Text line no.2"  <br />
                        "Text line no.3"  <br />
                        "Text line no.4"  <br />
                    </h3>
                </div>
            </div>
        </div>
        <div className='IngressRamme'>
            <IngressBox />
        </div>
            <DetailsBox />
    </div>
  )
};
  

let detailsSwitch = false;

  function detailShow() {
      const details = document.getElementById('details')
      if (detailsSwitch === false) {
          details.classList.add('DetailShow')
          }
      else {
          details.classList.remove('DetailShow')
          }
      detailsSwitch = !detailsSwitch
  }



  export default HeadSKaT;
  