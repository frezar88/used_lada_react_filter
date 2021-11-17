import React from 'react';
import s from "../ResultListItem.module.css";
import CircleBlock from "../../CircleBlock/CircleBlock";

const  FeaturesList = ({price,odometr,generashion,year,kuzov,drive_type,count_seats,transmission,engine}) => {


    return (
        <div className={s.features}>
            <ul>
                <li>
                    <div>
                        <p >
                            <span >{generashion + ' поколение'} </span>
                            <CircleBlock/>
                            <span>{year+ ' год'} </span>
                            <br/>
                            <span>{kuzov}</span>
                            <CircleBlock/>
                            <span>{drive_type}</span>
                            <br/>
                            <span>{count_seats+ ' мест'} </span>
                        </p>
                    </div>
                    <div className={s.mileage}>
                        <span >{odometr + ' км'}</span>
                    </div>
                </li>
                <li>
                    <div>{engine['capacity_engine'] + ' л '+ engine['type']}</div>
                    <span>{engine['power_hp']+ ' л.с'}</span>
                    <CircleBlock/>
                    <span>{transmission}</span>
                </li>
                <li>
                    <p>
                        {price + ' BYN'}
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