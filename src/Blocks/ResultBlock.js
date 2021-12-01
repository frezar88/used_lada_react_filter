import React, { useState} from 'react';
import SearchSortBlock from "../components/ResultBlock/SearchSortBlock/SearchSortBlock";
import ResultList from "../components/ResultBlock/ResultList/ResultList";

const ResultBlock = ({setStateSort, resultData}) => {
    const [stateSearch, setStateSearch] = useState('')


    return (
        <div style={{'position': 'relative'}}>

                <div>
                    <SearchSortBlock
                        stateSearch={stateSearch}
                        setStateSearch={setStateSearch}
                        setStateSort={setStateSort}
                    />
                    <ResultList  stateSearch={stateSearch} resultData={resultData}/>
                </div>



        </div>
    );
};

export default ResultBlock;