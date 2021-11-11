import React from 'react';
import s from './ResultList.module.css'
import ResultListItem from "../ResultListItem/ResultListItem";

const ResultList = () => {
    return (
        <div className={s.div}>
            <ResultListItem/>
            <ResultListItem/>

        </div>
    );
};

export default ResultList;