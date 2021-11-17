import React from 'react';
import s from './ShowCloseMoreBlock.module.css'

const ShowCloseMoreBlock = (props) => {

    const statusBlock = (e) => {
        if (props.state) {
            props.setState(false)

        } else {
            props.setState(true)

        }
    }
    return (
        <>
            {
                props.countItems >4 ?
                    <div color={s.div1}>
                        <p style={{color: props.state ? 'red' : 'black'}} onClick={(e) => statusBlock(e)}
                           className={s.p}>{props.state ? 'скрыть все' : 'показать все'}</p>
                    </div>
                    :
                    false
            }
        </>

    );
};

export default ShowCloseMoreBlock;