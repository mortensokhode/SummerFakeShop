import React from 'react';
import ProductBoxSmall from '../components/ProductBoxSmall';

function ErrorPage() {
  const errorInfo = {id:0,
    title:"Error",
    price:0,
    description:`The page you searched for is nowhere to be found. We are of course evaporatively little sorry about that, but will suggest you get yourself a pint (or two for good measure) as a treat to recover from the disappointment. 
                 
          Click text to return.`,
    category:"noProduct",
    image:"https://images.unsplash.com/photo-1644365977963-e96e883a8e74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGVycm9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    rating:{rate:0,
            count:0}}


  return (
    <div className='IngressMain'>
      <ProductBoxSmall product={errorInfo} />
    </div>

     )
}

export default ErrorPage