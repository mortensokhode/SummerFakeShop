import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

import { FENDP_PRODUCTS, FENDP_CATEGORIES, CATEGORY_LIMIT } from '../constantExports/globalConstants'


function properCase(lowString) {
    return (
            lowString.charAt(0).toUpperCase() + lowString.slice(1)
        )
    }

    const ProductLinesList = ({homeURL}) => {
        const myUrl = FENDP_PRODUCTS + FENDP_CATEGORIES 
        console.log('myUrl: ',myUrl)
        
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(false);
        const [apiError, setApiError] = useState(false);
    
        const getProductLines = () => {
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
            getProductLines()
        }, []);
      
        console.log('data: ',data)
    
      if (data) {
        const categoryList = data.map((category, index) => (
            index<=CATEGORY_LIMIT && 
                <Link   className="navbarLink colorSchema" 
                        key={index} 
                        state={{categoryOriginal: category , categoryName: properCase(category) }} 
                        to={`${homeURL}productLine/products`}>
                    
                    <h2>{`${category.charAt(0).toUpperCase() + category.slice(1)}`}</h2>
                </Link>
            )
        )
        // data.map((category, index) => (console.log('category, index:',category, index)))
  
        return (
            <>
                {categoryList}
            </>
        )
  
        }  else if (apiError) {
        return (
            <div>
              <h2>Data failed to load, please try again</h2>
            </div>
    
        );
    
      } else {
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        );
      }
    
    };
    


export default ProductLinesList

