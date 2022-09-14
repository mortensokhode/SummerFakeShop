import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import axios from 'axios';

import { FENDP_PRODUCTS, FENDP_SPECIFIC_CAT, PRODUCT_LIMIT, ZERO } from '../constantExports/globalConstants'
import ProductBoxSmall from './ProductBoxSmall';

  
const ProvideProductDetails = () => {
    const location = useLocation();
    const myUrl = FENDP_PRODUCTS + FENDP_SPECIFIC_CAT + location.state.categoryOriginal + `?limit=${PRODUCT_LIMIT}&skip=${ZERO}` 
    console.log('myUrl: ',myUrl)
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState(false);

    const getProductData = () => {
        setLoading(!loading)
        axios
        .get(myUrl)
        .then((res) => {
            setData(res.data.products); // husk å justere til den strukturen man faktisk mottar fra APIet
            setLoading(false);
        })
        .catch(setApiError(true));
    };


  useEffect(() => {
    myUrl !== 'fairyware' &&  
        getProductData()
    }, [location.key]);
  
    //console.log('fetched data: ',data)
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