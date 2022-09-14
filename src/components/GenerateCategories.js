import React from 'react'
import {Link } from 'react-router-dom'

import categories from "../data/categories"

function properCase(lowString) {
    return (
            lowString.charAt(0).toUpperCase() + lowString.slice(1)
        )
    }

function GenerateCategories({homeURL}) {
    
    const categoryList = categories.map((category, index) => ( 
            <Link   className="navbarLink colorSchema" 
                    key={index} 
                    state={{categoryOriginal: category , categoryName: properCase(category) }} 
                    to={`${homeURL}productLine/products`}>
                
                <h2>{`${category.charAt(0).toUpperCase() + category.slice(1)}`}</h2>
            </Link>
         )
    )
  
    return (
        <>
            {categoryList}
        </>
    )
}
  export default GenerateCategories;
