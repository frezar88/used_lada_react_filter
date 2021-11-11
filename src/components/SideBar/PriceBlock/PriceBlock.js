import React from 'react';
import Title from "../OtherElements/Title/Title";

import MultiRangeSlider from "../OtherElements/Inputs/Range/MultiRangeSlider";



const PriceBlock = () => {
    return (
        <div>
            <Title text={'Цена'}/>
            <MultiRangeSlider
                min={0}
                max={111000}
                blockName={'price'}
                onChange={({ min, max,blockName }) => console.log(`block:${blockName} min = ${min}, max = ${max}`)}
            />
        </div>
    );
};

export default PriceBlock;