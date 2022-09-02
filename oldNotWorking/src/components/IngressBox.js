import React from 'react';
import { StyledIngress, StyledIngressHeader, StyledIngressText } from "../styles/styledHeaderElements";

function IngressH2line({ text }) {
    return (
        <StyledIngressHeader>
            <span className='IngressHeading'>{text}</span>
        </StyledIngressHeader>
    )
  }

function IngressH3line({ text }) {
    return (
        <StyledIngressText>
            <span className='IngressText'>{text}</span>
        </StyledIngressText>
    )
  }

  // Her bør det være mulig med rette biblioteker å lage en classnames basert betinget style-endring 
  // spesifikt tenker jeg på backcolor slik at denne endrer seg ved flipping mellom front og bakside
  // Kommer tilbake til det senere 
  
const IngressBox = ({headline, ingressText}) => {
    return (
        <StyledIngress>
            <IngressH2line text={headline} />
            <IngressH3line text={ingressText} />
        </StyledIngress>
)
};

export default IngressBox;
