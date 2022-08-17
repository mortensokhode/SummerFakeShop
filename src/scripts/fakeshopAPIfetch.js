import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FAKESHOP_ENDPOINT, FENDP_PRODUCTS, FENDP_LIST_CATEGORIES, FENDP_LIST_SPEC_CAT } from './constExports/globalConstants'; 

// FAKESHOP_ENDPOINT = 'https://fakestoreapi.com/'
// FENDP_PRODUCTS = '/products'
// FENDP_LIST_CATEGORIES = '/products/categories'
// FENDP_LIST_SPEC_CAT = '/products/category/'

const endpointInUse = FAKESHOP_ENDPOINT + FENDP_LIST_SPEC_CAT;

function Categories() {
    const [ctgrData, setCtgrData] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories').then((response) => {
            setCtgrData(response.data)
        })
    }, [])

        return (
            (ctgrData.map((element, index) => (
                          <h2 key={index}> {NAVARRAY[index]} {element} {LINKCLOSE} </h2>
                          ))
                )
            )
 }

export default Categories


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





let myGithubHeader = {}
let myGithubRepositories = {}

// If wanted data isn't found in local storage, go get it at gitHub
if (!githubHeaderFromLStorage) {  
    fetchGithubData(myUrl, "myGitHubHeader");
    fetchGithubData(`${myUrl}/repos`, "myGithubRepositories");
}

// It is still possible that no data is present and this routine is supposed to run 
// only if something relevant is found in local storage
export const gitHubHeader = {
    if (myGithubHeader = githubHeaderFromLStorage) {
        //myGithubHeader = githubHeaderFromLStorage
      
        Object.entries(myGithubHeader).forEach(function([key, value]) {
            var elementText = `${key}: ${value}`
            
            if (headerArray.includes(key)) {
                    if (key === 'TBDavatar_url') {
                     //avatarElm.setAttribute("src", value) 
                    }
                    else {
                    PopulateTheStuffSomeWhere(elementText)
                    }
                }
        })
        return myGithubHeader
    }
}

export const gitHubRepositories = {
// ..and then we have to do something with the details
    if (myGithubRepositories = githubReposFromLStorage) { 
        // action pretty much to be decided
        console.log('Amount of repository object keys: ', Object.keys(myGithubRepositories).length)
        return myGithubRepositories
    }  
}

function PopulateTheStuffSomeWhere(stuff) {
    console.log(stuff)
}

async function fetchGithubData(urLocator, storageLocator) {
    // read github data
    let githubResponse = await fetch(urLocator);
    let githubData = await githubResponse.json();
  
    localStorage.setItem(storageLocator, JSON.stringify(githubData))
    // wait 2 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
  }
  
  // gitHubHeader, gitHubRepositories