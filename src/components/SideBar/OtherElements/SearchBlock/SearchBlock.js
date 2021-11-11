import React, {useState} from 'react';
import s from './SearchBlock.module.css'

const SearchBlock = () => {
    const [state, setState] = useState()
    return (
        <label className={s.label}>
            <input
                className={s.input}
                type={'search'}
                value={state}
                onInput={(e) => setState(e.target.value)}
                placeholder={'Поиск'}
            />
        </label>
    );
};

export default SearchBlock;