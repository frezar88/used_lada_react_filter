import React, {useState} from 'react';
import Title from "../OtherElements/Title/Title";

import MultiRangeSlider from "../OtherElements/Inputs/Range/MultiRangeSlider";
import InputNumber from "../OtherElements/Inputs/Number/InputNumber";


const PriceBlock = ({price}) => {
    const [min, setMin] = useState(+price[0].options.min)
    const [max, setMax] = useState(+price[0].options.max)
    const change = (min,max) => {
        setMin(min)
        setMax(max)
    }
    return (
        <div>
            <Title text={'Цена'}/>
            <MultiRangeSlider
                dataMin={'min'}
                dataMax={'max'}
                blockName={'price'}
                min={+price[0].options.min}
                max={+price[0].options.max}

                onChange={({min, max, blockName}) => change(min,max)}
            />
            <InputNumber blockName="price" min={min}  max={max} />
        </div>
    );
};

export default PriceBlock;