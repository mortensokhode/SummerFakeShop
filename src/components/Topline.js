import React from 'react';
import LeftHeading from "./LeftHeading";
import RightHeading from "./RightHeading";

function TopLine() {
    return (
        <div className='topline-sticky topline-box'>
                <div className='topline-content-box left-side-box'>
                    <LeftHeading />
                </div>

                <div className='topline-content-box right-side-box'>
                    <RightHeading />
                </div>
        </div>
    )
}

export default TopLine