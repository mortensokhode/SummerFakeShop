import React from 'react'
import {Link} from 'react-router-dom'

import ProductBoxSmall from '../components/ProductBoxSmall';
import fairyware from "../data/fairyware"

function HeadSKaT() {
    const fairyList = fairyware.map(fairyProduct => (
        <Link key={fairyProduct.id} to={`/fakeServices/fairyware/${fairyProduct.id}`}><ProductBoxSmall product={fairyProduct} /></Link> 
    ))

    return (
        <div className="IngressMain">
                      {fairyList}
        </div>
    )
  }

  export default HeadSKaT;
  
