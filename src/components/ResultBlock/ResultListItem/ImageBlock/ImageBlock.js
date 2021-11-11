import React from 'react';
import s from "../ResultListItem.module.css";
import img from "../no-image.jpg";

const ImageBlock = () => {
    return (
        <div className={s.img}>
            <img src={img} alt="#"/>
        </div>
    );
};

export default ImageBlock;