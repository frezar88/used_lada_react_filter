import React from 'react';
import s from './ResultListItem.module.css'
import FeaturesList from "./FeaturesList/FeaturesList";
import LocationBlock from "./LocationBlock/LocationBlock";
import CarName from "./CarName/CarName";
import ImageBlock from "./ImageBlock/ImageBlock";

const ResultListItem = ({name,price,odometr,generashion,year,kuzov,drive_type,count_seats,transmission,engine}) => {
    return (
        <div className={s.item}>
            <ImageBlock/>
            <CarName name={name}/>
            <FeaturesList
                price={price}
                odometr={odometr}
                generashion={generashion}
                year={year}
                kuzov={kuzov}
                drive_type={drive_type}
                count_seats={count_seats}
                transmission={transmission}
                engine={engine}
            />
            {/*<AdditionalPriceBlock carName={'lada'} carPrice={'megan'}/>*/}
            <LocationBlock/>
        </div>
    );
};

export default ResultListItem;