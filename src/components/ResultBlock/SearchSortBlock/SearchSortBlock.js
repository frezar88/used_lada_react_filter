import React from 'react';
import SearchBlock from "../SearchBlock/SearchBlock";
import SortBlock from "../SortBlock/SortBlock";
import s from './SearchSortBlock.module.css'

const SearchSortBlock = () => {
    return (
        <div className={s.div} >
            <SearchBlock/>
            <SortBlock/>
        </div>
    );
};

export default SearchSortBlock;