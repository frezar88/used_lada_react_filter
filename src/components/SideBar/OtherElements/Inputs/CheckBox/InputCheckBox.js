import React, {useEffect, useState} from 'react';
import s from './InputCheckBox.module.css'

const InputCheckBox = (props) => {
    const [state, setState] = useState(false)
    useEffect(() => {
        if (props.stateSort) {
            if (props.stateSort.status) {
                setState(true)
            } else {
                setState(false)
            }
        }
    }, [props.stateSort])
    return (
        <label className={state ? s.label + ' ' + s.active : s.label} data-name={props.dataName}>
            <input
                onClick={(e) => {
                    setState(e.target['checked'])
                    if (props.setStateInput) {
                        props.setStateInput(e.target['checked'])
                    }
                    if (props.setStateSort) {
                        props.setStateSort(e.target['checked'])
                    }
                }}
                value={state}
                className={s.input}
                type="checkbox"
                data-type={props['data-type']}
                data-name={props['data-name']}
                name={props['data-name']}
            />
            <span className={props['data-type'] === 'color' ? s.small_text : s.text}>{props.text}</span>
        </label>
    );
};

export default InputCheckBox;