import React from "react"
import DataFetcher from "./DataFetcher"
import { FENDP_PRODUCTS, FENDP_SPECIFIC_CAT, EMPTYOBJECT } from '../constantExports/globalConstants'
// import IngressBox from '../components/IngressBox';
// import IngressFrame from '../components/IngressFrame';
// import FlipCard from '../components/FlipCard';

function UsingDataFetcher() {    
    const endPointInUse = FENDP_PRODUCTS+FENDP_SPECIFIC_CAT+props.productLine
    console.log(endPointInUse)


    return (
        <div>
            <DataFetcher url={endPointInUse}>
                {(data, loading) => {
                    return (
                        loading ? 
                        <h1>Loading...</h1> :
                        <>
                            <ul>
                                <li>
                                    {data[0].title}
                                </li>
                            </ul>
                        </>
                        // <p>{JSON.stringify(data)}</p>
                    )
                }}
            </DataFetcher>
        </div>
    )
}

export default UsingDataFetcher
