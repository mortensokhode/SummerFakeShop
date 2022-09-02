import React from 'react';
import {MAIL_SIGNATURE, PHONE_SIGNATURE} from '../constantExports/globalConstants';

const textPackage = { headline: "Her kommer detaljer om ...", DetailsParagraph: "Og dette er da altså detaljene" };

function DetailsH2line(props) {
    return (
        <h2 className='DetailsText'>{ props.textLine.headline }</h2>
    )
  }

function DetailsH3line(props) {
    return (
        <h3 className='DetailsText'>{ props.textLine.DetailsParagraph }</h3>
    )
  }

const DetailsBox = () => {

    return (
        <>
            <div className="detailOuter blurredShadow" id='details'>
                <div className="detailBox" id='details'>
                    <div className='DetailedText'>
                        <span>
                            <DetailsH2line textLine={ textPackage } />
                            <br /><br />
                            <DetailsH3line textLine={ textPackage } />
                        </span><br /> <br />
                        <span>{MAIL_SIGNATURE} <br />{PHONE_SIGNATURE}</span>
                    </div>
                </div>
            </div>
        </>
)
};

export default DetailsBox;
