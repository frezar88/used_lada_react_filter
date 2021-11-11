import React from 'react';
import s from './ShowCloseMoreBlock.module.css'

const ShowCloseMoreBlock = (props) => {
    const statusBlock = () => {
        if (props.state){
            props.setState(false)
        }else{
            props.setState(true)
        }
    }
    return (
        <div>
            <p style={{color:props.state?'red':'black'}} onClick={statusBlock} className={s.p}>{props.state ? 'скрыть все': 'показать все'}</p>
        </div>
    );
};

export default ShowCloseMoreBlock;