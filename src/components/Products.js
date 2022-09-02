import React from 'react'

const Products = (props) => {
  return (
    <div>
        <ul className="productList">
          {
            props.data.map (content =>(
              <li>
                <img src={content.image} alt="Product image" className="responsiveTinyImg" />
                <span><strong>ID:</strong> {content.id}</span>
                <span><strong>Title:</strong> {content.title}</span>
                <span><strong>Price: $</strong> {content.price}</span>
                <span><strong>Category:</strong> {content.category}</span>
                
                <span><strong>Rate:</strong> {content.rating.rate}</span>
                <span><strong>Count:</strong> {content.rating.count}</span>
                <span><strong>Description:</strong> {content.description}</span>
              </li>
            ))
          }
        </ul>
    </div>
  );
}

export default Products;