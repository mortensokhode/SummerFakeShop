import React from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledProductBoxSmall, StyledIngressHeader, StyledIngressFootline, StyledIngressBody } from "../styles/styledHeaderElements";


const ProductBoxSmall = (props) => {
    const navigate = useNavigate();

    return (
            <StyledProductBoxSmall className="productBoxSmall">
                <div className="prodBoxContentFrame">
                    <img src={props.product.image} alt="Product image" className="responsiveTinyImg" />
                </div>

                <div className="prodBoxContentFrame">
                    <StyledIngressHeader className="prodBoxHeaderFrame">{props.product.title}</StyledIngressHeader>  
                </div>

                {           
                    (props.product.category === 'noProduct') ? 
                        <StyledIngressBody className ="returnText" onClick={() => navigate(-1)}>{props.product.description}</StyledIngressBody>
                    :
                        <StyledIngressFootline>Price: ${props.product.price}</StyledIngressFootline>
                }
            </StyledProductBoxSmall>
        )
};

export default ProductBoxSmall;
