import React from 'react';
import Title from "../OtherElements/Title/Title";
import s from "../SideBar.module.css";
import InputCheckBox from "../OtherElements/Inputs/CheckBox/InputCheckBox";

const BodyTypeBlock = () => {
    return (
        <div>
            <Title text={'Тип кузова'}/>

            <ul className={s.ul + ' ul'}>
                <li className={s.li}>
                    <InputCheckBox data-name={'body_type'} text={'Кабрик'}/>
                </li>
                <li className={s.li}>
                    <InputCheckBox data-name={'body_type'} text={'Седан'}/>
                </li>
            </ul>
        </div>
    );
};

export default BodyTypeBlock;