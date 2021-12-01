import React from 'react';
import s from './ResultList.module.css'
import ResultListItem from "../ResultListItem/ResultListItem";


const ResultList = ({resultData,stateSearch}) => {



    return (
        <div className={s.div}>
            {
                resultData ?
                    resultData.filter(item=>item.name.toLowerCase().indexOf(stateSearch.toLowerCase()) !==-1)
                        .map((({
                                         id,
                                         name,
                                         drive_type,
                                         kuzov,
                                         odometr,
                                         transmission,
                                         count_seats,
                                         generashion,
                                         year,
                                         engine,
                                         price
                                     }) =>
                            <ResultListItem
                                key={id}
                                name={name}
                                drive_type={drive_type}
                                kuzov={kuzov}
                                odometr={odometr}
                                transmission={transmission}
                                count_seats={count_seats}
                                generashion={generashion}
                                year={year}
                                engine={engine}
                                price={price}

                            />
                    ))
                    :
                    false
            }
        </div>


    )
        ;
};

export default ResultList;