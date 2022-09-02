import React from 'react';
import Categories from './Categories'

const categoryCount = Categories.length

const CategoryContainer = (categoryObject) => {
    return (
    <>
        <div className='ctgryOuter blurredShadow'>
            <div className='categrBox'>
                <svg className='CC_icon'>{categoryObject.categrIcon}</svg>
                <h3 className='IngressText'>{categoryObject.categrName}</h3>
                { categoryObject.details.length &&
                    <ul>
                        { categoryObject.details.map((dtlLine, key) => {
                            return <li key={key}>{dtlLine}</li>;
                        })}
                    </ul>
                }
            </div>
        </div>
    </>
)
};

export default CategoryContainer;
