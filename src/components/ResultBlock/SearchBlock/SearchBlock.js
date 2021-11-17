import React from 'react';
import s from './SearchBlock.module.css'

const SearchBlock = ({setStateSearch,stateSearch}) => {

    return (
        <div className={s.div}>
            <label className={s.label}>
                <input
                    className={s.input}
                    data-type={'search'}
                    type={'search'}
                    placeholder={'Поиск'}
                    value={stateSearch}
                    onInput={(e)=>setStateSearch(e.target.value)}
                />
            </label>
            <div className="advance-search-brand" style={{maxHeight: "59px"}}>
                <ul>
                    <li style={{opacity: 0, position: 'absolute'}}>"Renault"</li>
                    <li style={{opacity: 0, position: 'absolute'}}>"Lada"</li>
                </ul>
            </div>
        </div>
    );
};

export default SearchBlock;