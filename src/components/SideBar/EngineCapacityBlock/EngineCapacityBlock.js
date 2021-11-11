import React from 'react';
import Title from "../OtherElements/Title/Title";
import MultiRangeSlider from "../OtherElements/Inputs/Range/MultiRangeSlider";



const EngineCapacityBlock = () => {
    return (
        <div>
            <Title text={'Мощность двигателя'}/>
            <MultiRangeSlider
                min={0}
                max={111000}
                onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
            />
        </div>
    );
};

export default EngineCapacityBlock;