import React from 'react';
import s from "../ResultListItem.module.css";

const LocationBlock = () => {
    return (
        <div className={s.location}>
            <p>
                <a href="/">Минск, ул. Каменногорская</a>
            </p>
        </div>
    );
};

export default LocationBlock;