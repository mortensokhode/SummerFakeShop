import React from 'react'
import IngressBox from '../components/IngressBox'
import FlipCard from '../components/FlipCard';
import { EMPTYOBJECT } from '../constantExports/globalConstants'

const flipIngress =    {id: "1",
                        variant: "click",
                        front: <IngressBox headline={'Front Heading - Electronics'} ingressText={'Dette er da altså Electronics-page front'} />,
                        back: <IngressBox headline={'Backside Heading - Electronics'} ingressText={'Dette er da altså Electronics-page bakside'} />}


const Electronics = () => {

  return (
    <>
        <div className='IngressRamme'>
            <FlipCard key={flipIngress.id} card={flipIngress} />
            <FlipCard key={'2'} card={flipIngress} />
        </div>
        <div className='IngressRamme'>
            <FlipCard key={flipIngress.id} card={flipIngress} />
            <FlipCard key={'2'} card={EMPTYOBJECT} />
        </div>

    </>
)
};

  export default Electronics;
  