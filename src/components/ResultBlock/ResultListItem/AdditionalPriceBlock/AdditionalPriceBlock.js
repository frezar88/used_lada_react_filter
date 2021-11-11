import React from 'react';
import './AdditionalPriceBlock.css'

const AdditionalPriceBlock = ({carName,carPrice}) => {
    return (
        <div className="additional_price_block">
            <div className="switch-credit">
                <label className="switch">
                    <input id={carName} type="checkbox"/>
                    <span className="slider round"></span>
                </label>
                <label htmlFor={carName}>
                    <div>Цена в кредит</div>
                    <div><span>0</span> BYN/мес</div>
                </label>
            </div>
            <div className="switch-appraise">
                <label className="switch">
                    <input id={carPrice} type="checkbox"/>
                    <span className="slider round"></span>
                </label>
                <label htmlFor={carPrice}>
                    <div>Цена с учётом Trade-in</div>
                    0 BYN/мес
                    <div>Оцените свой автомобиль</div>
                </label>
            </div>
        </div>
    );
};

export default AdditionalPriceBlock;