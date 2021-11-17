import React, { useCallback, useEffect, useState, useRef } from "react";
import s from "./MultiRangeSlider.module.css";

const MultiRangeSlider = ({ min, max, onChange,blockName ,dataMax,dataMin}) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(null);
    const maxValRef = useRef(null);
    const range = useRef(null);

    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );
    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minVal, getPercent]);
    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    useEffect(() => {
        onChange({ blockName:blockName,min: minVal, max: maxVal });
    }, [minVal, maxVal, onChange,blockName]);

    return (
        <div className={s['container']}>
            <input
                data-type={blockName}
                data-name={dataMin}
                type="range"
                min={min}
                max={max}
                value={minVal}
                ref={minValRef}
                onChange={(event) => {
                    const value = Math.min(+event.target.value, maxVal - 1);
                    setMinVal(value);
                    event.target.value = value.toString();
                }}
                className={s.thumb + ' ' + s["thumb thumb--zindex-3thumb--zindex-5"]}
            />
            <input
                data-type={blockName}
                data-name={dataMax}
                type="range"
                min={min}
                max={max}
                value={maxVal}
                ref={maxValRef}
                onChange={(event) => {
                    const value = Math.max(+event.target.value, minVal + 1);
                    setMaxVal(value);
                    event.target.value = value.toString();
                }}
                className={s.thumb+' ' +s['thumb thumb--zindex-4']}
            />

            <div className={s.slider}>
                <div className={s["slider__track"]} />
                <div ref={range} className={s["slider__range"]} />
                <div>

                    {/*<div className="slider__left-value">{minVal}</div>*/}
                    {/*<div className="slider__right-value">{maxVal}</div>*/}
                </div>

            </div>
        </div>
    );
};



export default MultiRangeSlider;
