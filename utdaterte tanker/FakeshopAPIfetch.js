import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FENDP_PRODUCTS, FENDP_CATEGORIES, FENDP_SPECIFIC_CAT, EMPTYOBJECT, PRODUCT_CATEGORIES } from '../constantExports/globalConstants'

// FAKESHOP_ENDPOINT = 'https://fakestoreapi.com'
// FENDP_PRODUCTS = '/products'
// FENDP_LIST_CATEGORIES = '/products/categories'
// FENDP_LIST_SPEC_CAT = '/products/category/'

// export const PRODUCT_CATEGORIES = ["electronics",
//                                    "jewelery",
//                                    "men's clothing",
//                                    "women's clothing"
//                                   ]

const endpointInUse = (categoryNo) => {
    // return FAKESHOP_ENDPOINT + FENDP_LIST_SPEC_CAT + PRODUCT_CATEGORIES[(categoryNo - 1)];
    return 'https://fakestoreapi.com/products/category/electronics'
}

  function FakeshopAPIfetch() {

    const [fakeshopData, setFakeshopData] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/category/electronics').then((response) => {
                setFakeshopData(response.data)
                })
            }, [])

    return (
      <>
        {fakeshopData.map(({ id, title, price, description, category }) => (
            <>
                <h3 key={id}>Title {title} Price: {price}</h3><br />
                <p>Description: {description}</p>

            </>
        ))}
      </>
    );
  }

// function FakeshopAPIfetch() {
//         return (
//             fakeshopData.forEach(function([key, value]) {
                
//                 if (fakeshopData.includes(key)) {
//                         if (key === 'TBDavatar_url') {
//                          //avatarElm.setAttribute("src", value) 
//                         }
//                         else {
//                         <h3>
//                             {key}: {value}
//                         </h3>
//                         }
//                     }
//             })
    
//             // 'Nada'
//             )
//  }

export default FakeshopAPIfetch


// {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//     "rate": 3.9,
//     "count": 120
//     }
//     },

    // bodyTextF = `<ul>
    //                 <li>{product.price}</li>
    //                 <li>{product.image}</li>
    //             </ul> <br />
    //            <footer>På lager: {product.rating.count}  Rating: {product.rating.rate}</footer>`

    // bodyTextB = `<ul>
    //            <li>{product.description}</li>
    //            <li>{product.image}</li>
    //        </ul> <br />
    //       <footer>På lager: {product.rating.count}  Rating: {product.rating.rate}</footer>`

    // flipIngress.id = product.id
    // frontside: headline= product.title
    //            ingressText=bodyText

    // const flipIngress =    {id: "1",
    // variant: "click",
    // front: <IngressBox headline={'Front Heading - Electronics'} ingressText={'Dette er da altså Electronics-page front'} />,
    // back: <IngressBox headline={'Backside Heading - Electronics'} ingressText={'Dette er da altså Electronics-page bakside'} />}


