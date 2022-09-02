import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FENDP_PRODUCTS, FENDP_CATEGORIES, FENDP_SPECIFIC_CAT, EMPTYOBJECT, PRODUCT_CATEGORIES } from '../constantExports/globalConstants'
import IngressBox from '../components/IngressBox';
import IngressFrame from '../components/IngressFrame';
import FlipCard from '../components/FlipCard';

const endpointInUse = 'https://fakestoreapi.com/products/category/electronics'
const endPointTest = FENDP_PRODUCTS+FENDP_SPECIFIC_CAT
console.log(endPointTest)

function Electronics({productLine}) {

    const [fakeshopData, setFakeshopData] = useState([])

    const flipIngress =    {id: "1",
    variant: "click",
    front: <IngressBox headline={'Front Heading - Electronics'} ingressText={'Dette er da altså Electronics-page front'} />,
    back: <IngressBox headline={'Backside Heading - Electronics'} ingressText={'Dette er da altså Electronics-page bakside'} />}


    useEffect(() => {
        axios.get(endpointInUse).then((response) => {
                setFakeshopData(response.data)
                })
            }, [])


    // useEffect(() => {
    //     axios.get('https://fakestoreapi.com/products/category/electronics').then((response) => {
    //             setFakeshopData(response.data)
    //             })
    //         }, [])
        
        
    return (
      <>
        {fakeshopData.map(({ id, title, price, description, category }) => (
            <div className="IngressMain">
                <h3 key={id}>Title {title} Price: {price}</h3><br />
                <p>Description: {description}</p>
                
                <IngressFrame>
                    <FlipCard key={flipIngress.id} card={flipIngress} />
                </IngressFrame>

                <IngressFrame>
                    <FlipCard key={'2'} card={flipIngress} />
                </IngressFrame>

            </div>
        ))}
      </>
    );
  }



export default Electronics;
  