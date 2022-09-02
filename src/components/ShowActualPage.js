import React from 'react'

import { FENDP_PRODUCTS, FENDP_SPECIFIC_CAT, EMPTYOBJECT} from '../constantExports/globalConstants'
import DataFetcher from "../classComponents/DataFetcher"
import Products from "../components/Products"
// import IngressFrame from '../components/IngressFrame';
// import IngressBox from '../components/IngressBox';
// import FlipCard from '../components/FlipCard';



export default function ShowActualPage({productLine}) {

  console.log("productLine: ", productLine )
  const endPointInUse = productLine ? (FENDP_PRODUCTS+FENDP_SPECIFIC_CAT+productLine) : FENDP_PRODUCTS
  console.log("endPointInUse: ", endPointInUse)
  
  
  // endPointInUse = FENDP_PRODUCTS+FENDP_SPECIFIC_CAT+productLine
  return (
    <div className="IngressMain">
      
          <DataFetcher url={endPointInUse}>
              {(data, loading, givenURL) => {
                
                return (
                  loading ? 
                  <h1>Loading....</h1> : 
                  <>
                      <h2>{givenURL}</h2>
                      <p>{JSON.stringify(data)}</p>
                      {/* <Products data={data}/> */}
                    </>

                )  // Main return
                }}
          </DataFetcher>
      </div>
  )
}

