import React, {useState} from 'react';
import Title from "../OtherElements/Title/Title";
import MultiRangeSlider from "../OtherElements/Inputs/Range/MultiRangeSlider";
import InputNumber from "../OtherElements/Inputs/Number/InputNumber";


const YearsBlock = ({year}) => {
    const [min, setMin] = useState(+year[0].options.min)
    const [max, setMax] = useState(+year[0].options.max)
    const change = (min,max) => {
        setMin(min)
        setMax(max)
    }
    return (
        <div>
            <Title text={'Год выпуска'}/>
            <MultiRangeSlider
                dataMin={'min'}
                dataMax={'max'}
                blockName={'year'}
                min={+year[0].options.min}
                max={+year[0].options.max}

                onChange={({min, max, blockName}) => change(min,max)}
            />
            <InputNumber blockName={'year'} min={min}  max={max} />
        </div>
    );
};

export default YearsBlock;