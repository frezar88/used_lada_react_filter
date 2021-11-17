import React from 'react';
import s from './InputNumber.module.css'

const InputNumber = ({min,max,blockName}) => {
    return (
            <div className={s["cars-in-stock-side-bar__container"]} >
                <label className={s["inp-no-checked"]}>
                    <input  data-type={blockName} disabled={true} value={min}  type="text" name="min-price"/>
                </label>
                <label className={s["inp-no-checked"]}>
                    <input data-type={blockName} disabled={true} value={max} type="text" name="max-price"/>
                </label>
            </div>
    );
};

export default InputNumber;