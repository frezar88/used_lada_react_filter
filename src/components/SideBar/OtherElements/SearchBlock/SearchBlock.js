import React, {useEffect, useState} from 'react';
import s from './SearchBlock.module.css'

const SearchBlock = ({nameBlock, data, keyObject, setStateSearch}) => {

    const [state, setState] = useState('')
    useEffect(() => {
        if (setStateSearch) {
            if (state.length > 0) {
                setStateSearch(state)
            }
        }

    }, [state, setStateSearch])

    const selectValueAndCloseAdvanceSearchBlock = (e) => {
        // setState(e.target.innerHTML)
        let parentBlock = e.target.parentNode.parentNode
        parentBlock.style.maxHeight = '0'
        console.log()
    }
    return (
        <div className={s.div}>
            <label className={s.label}>
                <input
                    data-type={'search'}
                    data-name={nameBlock}
                    className={s.input}
                    type={'search'}
                    value={state}
                    onInput={(e) => {
                        setState(e.target.value)
                    }}
                    placeholder={'Поиск'}
                />
            </label>
            <div className={s['advance-search-brand']} style={state.length > 0 ? {maxHeight: 'none'} : {maxHeight: 0}}>
                <ul className={s.ul}>
                    {
                        data ?
                            data[0].options
                                .filter(item => item[keyObject].toLowerCase().indexOf(state.toLowerCase()) !== -1)
                                .map(((item) =>
                                        <li onClick={(e) => selectValueAndCloseAdvanceSearchBlock(e)}
                                            key={item[keyObject]}>{item[keyObject]}
                                        </li>
                                ))
                            :
                            false
                    }
                </ul>
            </div>
        </div>

    );
};

export default SearchBlock;