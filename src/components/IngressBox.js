import React from 'react';
import {TEXTOBJECT} from '../constantExports/globalConstants'; 

function IngressH2line({ text }) {
    return (
        <h2 className='IngressHeading'>{text.headline}</h2>
    )
  }

function IngressH3line({ text }) {
    return (
        <h3 className='IngressText'>{text.ingressParagraph}</h3>
    )
  }

const IngressBox = () => {
    return (
    <>
        <div className='IngressOuter blurredShadow'>
            <div className='IngressBoks'>
                <IngressH2line text={TEXTOBJECT} />
                <IngressH3line text={TEXTOBJECT} />
            </div>
        </div>
    </>
)
};

export default IngressBox;
