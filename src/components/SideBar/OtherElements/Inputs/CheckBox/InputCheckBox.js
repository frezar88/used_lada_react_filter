import React, {useState} from 'react';
import s from './InputCheckBox.module.css'

const InputCheckBox = (props) => {
    const [state, setState] = useState(false)

    return (
        <label className={state ? s.label + ' ' + s.active : s.label} data-name={props.dataName}>
            <input
                onClick={(e)=> {
                    setState(e.target['checked'])
                    if (props.setStateInput){
                        props.setStateInput(e.target['checked'])
                    }
                }}
                value={state}
                className={s.input}
                type="checkbox" data-name={props.dataName}
                name={props.dataName}
            />
            <span className={s.text}>{props.text}</span>
        </label>
    );
};

export default InputCheckBox;