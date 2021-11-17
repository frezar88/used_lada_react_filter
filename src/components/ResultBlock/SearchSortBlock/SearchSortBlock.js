import React from 'react';
import SearchBlock from "../SearchBlock/SearchBlock";
import SortBlock from "../SortBlock/SortBlock";
import s from './SearchSortBlock.module.css'

const SearchSortBlock = ({setStateSort,setStateSearch,stateSearch}) => {


    return (
        <div className={s.div} >
            <SearchBlock stateSearch={stateSearch} setStateSearch={setStateSearch}/>
            <SortBlock  setStateSort={setStateSort} />
        </div>
    );
};

export default SearchSortBlock;