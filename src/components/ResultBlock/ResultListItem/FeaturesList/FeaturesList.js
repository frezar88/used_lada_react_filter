import React from 'react';
import s from "../ResultListItem.module.css";
import CircleBlock from "../../CircleBlock/CircleBlock";

const FeaturesList = () => {
    return (
        <div className={s.features}>
            <ul>
                <li>
                    <div>
                        <p>
                            <span>1 поколение</span>
                            <CircleBlock/>
                            <span>2015 год</span>
                            <br/>
                            <span>кроссовер</span>
                            <CircleBlock/>
                            <span>передний</span>
                            <CircleBlock/>
                            <span>5 мест</span>
                        </p>
                    </div>
                    <div className={s.mileage}>
                        <span >94875 км</span>
                    </div>
                </li>
                <li>
                    <div>1.6 Бензиновый</div>
                    <span>82 л.с</span>
                    <CircleBlock/>
                    <span>Механическая</span>
                </li>
                <li>
                    <p>
                        20000  BYN
                    </p>
                </li>
                <li className={s.about_price}>
                    <p>Подробнее о цене</p>
                </li>
            </ul>
        </div>
    );
};

export default FeaturesList;