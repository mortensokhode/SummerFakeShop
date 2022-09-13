import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import axios from 'axios';

import { FENDP_PRODUCTS, FENDP_SPECIFIC_CAT } from '../constantExports/globalConstants'
import ProductBoxSmall from './ProductBoxSmall';

  
const ProvideProductDetails = () => {
    const location = useLocation();
    const myUrl = FENDP_PRODUCTS + FENDP_SPECIFIC_CAT + location.state.categoryOriginal

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState(false);

    const getProductData = () => {
        setLoading(!loading)
        axios
        .get(myUrl)
        .then((res) => {
            setData(res.data);
            setLoading(false);
        })
        .catch(setApiError(true));
    };


  useEffect(() => {

    myUrl !== 'fairyware' &&  
        getProductData()
    }, [location.key]);
  
  
  if (data) {
    const productList = data.map(product => (
        <Link key={product.id} to={`/services/${product.id}`}><ProductBoxSmall product={product} /></Link> 
    ))

    return (
        <div className="IngressMain">
            {productList}
        </div>
    );

  }  else if (apiError) {
    return (
        <div className="IngressMain">
          <h2>Data failed to load, please try again</h2>
        </div>

    );

  } else {
    return (
        <div className="IngressMain">
            <h2>Loading...</h2>
        </div>
    );
  }

};

export default ProvideProductDetails