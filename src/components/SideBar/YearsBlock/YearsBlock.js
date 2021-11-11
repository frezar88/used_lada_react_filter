import React from 'react';
import Title from "../OtherElements/Title/Title";
import MultiRangeSlider from "../OtherElements/Inputs/Range/MultiRangeSlider";


const YearsBlock = () => {
    return (
        <div>
            <Title text={'Год выпуска'}/>
            <MultiRangeSlider
                min={0}
                max={111000}
                blockName={'Year'}
                onChange={({ min, max,blockName }) => console.log(`block:${blockName} min = ${min}, max = ${max}`)}
            />
        </div>
    );
};

export default YearsBlock;