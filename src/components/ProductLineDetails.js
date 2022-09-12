import React from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

import { useEffect } from "react";
import { useState } from "react";
import ProductBoxSmall from './ProductBoxSmall';


const ProductLineDetails = ({url}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(false);

  const getProductData = () => {
    setLoading(!loading)
    axios
      .get(url)
      .then((res) => {
        console.log("res.data: ", res.data)
        setData(res.data);
        setLoading(false);
      })
      .catch(setApiError(true));
  };


  useEffect(() => {
    url !== "fairyware" &&  
      getProductData()
  }, []);

  
  if (data) {
    const productList = data.map(product => (
        <Link key={product.id} to={`/services/${product.id}`}><ProductBoxSmall product={product} /></Link> 
    ))

    return (
        <>
            {productList}
        </>
    );

  }  else if (apiError) {
    console.log("data: ", data)
    return (
        <>
          <h2>Data failed to load, please try again</h2>
        </>

    );

  } else {
    return (
          <h2>Loading...</h2>
    );
  }

};

export default ProductLineDetails