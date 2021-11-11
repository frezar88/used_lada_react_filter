import React from 'react';
import Title from "../OtherElements/Title/Title";
import s from "../SideBar.module.css";
import InputCheckBox from "../OtherElements/Inputs/CheckBox/InputCheckBox";

const СarPositionBlock = () => {
    return (
        <div>
            <Title text={'Месторасположение'}/>

            <ul className={s.ul + ' ul'}>

                <li className={s.li}>
                    <InputCheckBox data-name={'car_position'} text={'Каменка'}/>
                </li>
            </ul>
        </div>
    );
};

export default СarPositionBlock;