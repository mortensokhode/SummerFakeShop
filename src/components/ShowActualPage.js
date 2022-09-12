import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";

import { FENDP_PRODUCTS, FENDP_SPECIFIC_CAT } from '../constantExports/globalConstants'
import ProductLineDetails from "./ProductLineDetails"


export default function ShowActualPageNew({productLine}) {
  const location = useLocation();
  
  useEffect(() => {
    console.log("location.pathname:", location.pathname);
    console.log("location:", location);
    console.log("location.state.categoryName:", location.state.categoryName)
    console.log("location.state.categoryOriginal:", location.state.categoryOriginal)
  }, []);

  return (
    <div className="IngressMain">
      
          <ProductLineDetails url={FENDP_PRODUCTS+FENDP_SPECIFIC_CAT+location.state.categoryOriginal}>
              {data => {
                
                return (
                  <>
                    {data}
                  </>
                )  
                }}
          </ProductLineDetails>
      </div>
  )
}

