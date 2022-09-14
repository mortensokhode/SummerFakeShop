import React from 'react';
import ProductBoxSmall from '../components/ProductBoxSmall';
const aboutImgArr = [
                    "https://images.unsplash.com/photo-1506773090264-ac0b07293a64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
                    "https://images.unsplash.com/photo-1502701023938-7e1a159d64ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
                    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
                    "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80",
                    "https://images.unsplash.com/photo-1634176866089-b633f4aec882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80",
                    "https://images.unsplash.com/photo-1447433909565-04bfc496fe73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                    ]

const arrIndex = Math.round(Math.random()*6);

const aboutInfo = {id:0,
  title:"About us",
  price: arrIndex,
  description:`Yeah, what about us? Sometimes we're alone - alone proper that is. Sometimes we're not. And then again alone, albeit together with others.
  
  Click text to return`,
  category:"noProduct",
  thumbnail:aboutImgArr[arrIndex],
  rating:{rate:0,
          count:0}}


const AboutUsPage = () => {
  return (
    <div className='IngressMain'>
      <ProductBoxSmall product={aboutInfo} />
    </div>
  );
};

export default AboutUsPage;
