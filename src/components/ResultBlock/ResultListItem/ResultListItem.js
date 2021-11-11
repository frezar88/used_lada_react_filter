import React from 'react';
import s from './ResultListItem.module.css'
import FeaturesList from "./FeaturesList/FeaturesList";
import AdditionalPriceBlock from "./AdditionalPriceBlock/AdditionalPriceBlock";
import LocationBlock from "./LocationBlock/LocationBlock";
import CarName from "./CarName/CarName";
import ImageBlock from "./ImageBlock/ImageBlock";

const ResultListItem = () => {
    return (
        <div className={s.item}>
            <ImageBlock/>
            <CarName/>
            <FeaturesList/>
            <AdditionalPriceBlock carName={'lada'} carPrice={'megan'}/>
            <LocationBlock/>
        </div>
    );
};

export default ResultListItem;