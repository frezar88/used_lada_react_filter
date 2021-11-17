import React, {useState} from 'react';
import Title from "../OtherElements/Title/Title";
import MultiRangeSlider from "../OtherElements/Inputs/Range/MultiRangeSlider";
import InputNumber from "../OtherElements/Inputs/Number/InputNumber";



const EngineCapacityBlock = ({engineCapacity}) => {
    const [min, setMin] = useState(+engineCapacity[0].options[0].min)
    const [max, setMax] = useState(+engineCapacity[0].options[0].max)
    const change = (min,max) => {
        setMin(min)
        setMax(max)
    }
    return (
        <div>
            <Title text={'Мощность двигателя'}/>
            <MultiRangeSlider
                dataMin={'min'}
                dataMax={'max'}
                blockName={'engineCapacity'}
                min={+engineCapacity[0].options[0].min}
                max={+engineCapacity[0].options[0].max}
                onChange={({min, max, blockName}) => change(min,max)}
            />
            <InputNumber blockName={'engineCapacity'}  min={min}  max={max} />
        </div>
    );
};

export default EngineCapacityBlock;