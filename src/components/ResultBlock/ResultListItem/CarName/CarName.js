import React from 'react';
import s from "../ResultListItem.module.css";

const CarName = ({name}) => {
    return (
        <div className={s.car_name}>
            <p>{name}</p>
        </div>
    );
};

export default CarName;