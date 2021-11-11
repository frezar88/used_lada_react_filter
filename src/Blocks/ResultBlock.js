import React, {useEffect} from 'react';
import SearchSortBlock from "../components/ResultBlock/SearchSortBlock/SearchSortBlock";
import ResultList from "../components/ResultBlock/ResultList/ResultList";
import {getCars, getStartedFilter} from "../http/Requests";


const ResultBlock = () => {
    useEffect(()=>{
        getStartedFilter().then(data=>{
            console.log(data)
        })
        getCars().then(data=>{
            console.log(data)
        })
    },[])
    return (
        <div>
            <SearchSortBlock/>
            <ResultList/>
        </div>
    );
};

export default ResultBlock;