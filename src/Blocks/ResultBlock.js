import React, {useEffect, useState} from 'react';
import SearchSortBlock from "../components/ResultBlock/SearchSortBlock/SearchSortBlock";
import ResultList from "../components/ResultBlock/ResultList/ResultList";
import {getCurrentCars} from "../http/Requests";
import Spinner from "../components/Spinner/Spinner";


const ResultBlock = ({cars, setCars,stateSort,setStateSort}) => {
    const [stateSearch,setStateSearch]=useState('')
    useEffect(() => {
        getCurrentCars().then(data => {
                setCars(data.data.cars)
        })
    }, [setCars])
    const sortDataCars = () => {
        if (stateSort.status && !stateSort.sortType) {
            let data= Array.from(cars)
            data.sort((a, b) => +a.price - +b.price)
            return data
        } else if (stateSort.status && stateSort.sortType) {
            let data= Array.from(cars)
            data = data.sort((a, b) => +b.price - +a.price)
            return  data
        } else {
            return cars
        }
    }
    return (
        <div style={{'position': 'relative'}}>
            {cars ?
                <div>
                    <SearchSortBlock
                        stateSearch={stateSearch}
                        setStateSearch={setStateSearch}
                        setStateSort={setStateSort}

                    />
                    <ResultList stateSearch={stateSearch} resultData={sortDataCars()}/>
                </div>
                :
                <Spinner/>
            }
        </div>
    );
};

export default ResultBlock;