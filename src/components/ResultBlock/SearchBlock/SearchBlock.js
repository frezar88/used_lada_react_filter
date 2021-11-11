import React from 'react';
import s from './SearchBlock.module.css'

const SearchBlock = () => {
    return (
        <div className={s.div}>
            <label className={s.label}>
                <input className={s.input} type={'search'} placeholder={'Поиск'}/>
            </label>
        </div>
    );
};

export default SearchBlock;