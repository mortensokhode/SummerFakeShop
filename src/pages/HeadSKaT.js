import React from 'react'
import IngressBox from '../components/IngressBox'
import IngressFrame from '../components/IngressFrame';
import {TEXTOBJECT, LOREMIPSUM, EMPTYOBJECT } from '../constantExports/globalConstants'; 

import FlipCard from '../components/FlipCard';

const flipIngress =    {id: 1,
                        variant: "click",
                        front: <IngressBox headline={TEXTOBJECT.headline} ingressText={TEXTOBJECT.ingressText} />,
                        back: <IngressBox headline={LOREMIPSUM.headline} ingressText={LOREMIPSUM.ingressText} />}

const tempJewelery = {id:6,
                      title:"Solid Gold Petite Micropave ",
                      price:168,
                      description:"Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
                      category:"jewelery",
                      img:"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
                      rate:3.9,
                      count:70}

const tempElectronics = { id: 10,
                          title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
                          price: 109,
                          description: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
                          category: "electronics",
                          img: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
                          rate: 2.9,
                          count: 470}


const HeadSKaT = () => {

  return (
          <div className='IngressMain'>
              <IngressFrame>
                  <FlipCard key={tempElectronics.id} 
                            card={{ variant:"click", 
                                    front:<IngressBox cardSide="front" 
                                                      product={tempElectronics} />,
                                    back:<IngressBox  cardSide="back"
                                                      product={tempElectronics} />}} />
              </IngressFrame>

              <IngressFrame>
                  <FlipCard key={tempJewelery.id} 
                            card={{ variant:"click", 
                                    front:<IngressBox cardSide="front" 
                                                      product={tempJewelery} />,
                                    back:<IngressBox  cardSide="back"
                                                      product={tempJewelery} />}} />
              </IngressFrame>

              <IngressFrame>
                  <FlipCard key={tempElectronics.id} 
                            card={{ variant:"click", 
                                    front:<IngressBox cardSide="front" 
                                                      product={tempElectronics} />,
                                    back:<IngressBox  cardSide="back"
                                                      product={tempElectronics} />}} />
              </IngressFrame>

              <IngressFrame>
                  <FlipCard key={tempJewelery.id} 
                            card={{ variant:"click", 
                                    front:<IngressBox cardSide="front" 
                                                      product={tempJewelery} />,
                                    back:<IngressBox  cardSide="back"
                                                      product={tempJewelery} />}} />
              </IngressFrame>
              
              <IngressFrame>
                  <FlipCard key={tempElectronics.id} 
                            card={{ variant:"click", 
                                    front:<IngressBox cardSide="front" 
                                                      product={tempElectronics} />,
                                    back:<IngressBox  cardSide="back"
                                                      product={tempElectronics} />}} />
              </IngressFrame>

              <IngressFrame>
                  <FlipCard key={tempJewelery.id} 
                            card={{ variant:"click", 
                                    front:<IngressBox cardSide="front" 
                                                      product={tempJewelery} />,
                                    back:<IngressBox  cardSide="back"
                                                      product={tempJewelery} />}} />
              </IngressFrame>
              
              <IngressFrame>
                  <FlipCard key={tempElectronics.id} 
                            card={{ variant:"click", 
                                    front:<IngressBox cardSide="front" 
                                                      product={tempElectronics} />,
                                    back:<IngressBox  cardSide="back"
                                                      product={tempElectronics} />}} />
              </IngressFrame>

              <IngressFrame> <FlipCard key={flipIngress.id} card={EMPTYOBJECT} /> </IngressFrame>
          </div>
         )
};

  export default HeadSKaT;
  
