import React from "react"
import categoriesData from "../data/categories.JSON"

function ProductLinesList() {
    const categories = categoriesData.map(category => (
        <h3>{category.name}</h3>
    ))
    return (
        <div>
            <h3> ProductLinesList  </h3>
            {categories}
        </div>
  )
}

export default ProductLinesList

