import React from 'react'
import IngressBox from '../components/IngressBox'
import {TEXTOBJECT, LOREMIPSUM, EMPTYOBJECT } from '../constantExports/globalConstants'; 

import FlipCard from '../components/FlipCard';

const flipIngress =    {id: "1",
                        variant: "click",
                        front: <IngressBox headline={TEXTOBJECT.headline} ingressText={TEXTOBJECT.ingressParagraph} />,
                        back: <IngressBox headline={LOREMIPSUM.headline} ingressText={LOREMIPSUM.ingressParagraph} />}


const HeadSKaT = () => {

  return (
    <>
        <div className='IngressRamme'>
            <FlipCard key={flipIngress.id} card={flipIngress} />
            <FlipCard key={'2'} card={flipIngress} />
        </div>

        <div className='IngressRamme'>
            <FlipCard key={flipIngress.id} card={flipIngress} />
            <FlipCard key={flipIngress.id} card={flipIngress} />
        </div>

        <div className='IngressRamme'>
            <FlipCard key={flipIngress.id} card={flipIngress} />
            <FlipCard key={flipIngress.id} card={flipIngress} />
        </div>

        <div className='IngressRamme'>
            <FlipCard key={flipIngress.id} card={flipIngress} />
            <FlipCard key={flipIngress.id} card={flipIngress} />
        </div>

        <div className='IngressRamme'>
            <FlipCard key={flipIngress.id} card={flipIngress} />
            <FlipCard key={flipIngress.id} card={EMPTYOBJECT} />
        </div>
    </>
)
};

  export default HeadSKaT;
  