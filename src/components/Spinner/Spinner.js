import React from 'react';
import s from './Spinner.module.css'

const Spinner = () => {
    return (
        <div className={s.loader} style={{'position':'absolute','left':'calc(50% - 30px)', 'top':'15%'}} >

        </div>
    );
};

export default Spinner;