import React from 'react';
import Title from "../OtherElements/Title/Title";
import s from "../SideBar.module.css";
import InputCheckBox from "../OtherElements/Inputs/CheckBox/InputCheckBox";


const EngineTypeBlock = () => {

    return (
        <div>
            <Title text={'Тип двигателя'}/>
            <ul className={s.ul + ' ul'}>
                <li className={s.li}>
                    <InputCheckBox data-name={'engineType'} text={"Дизельный"}/>
                </li>
                <li className={s.li}>
                    <InputCheckBox data-name={'engineType'} text={"Бензиновый"}/>
                </li>
                <li className={s.li}>
                    <InputCheckBox data-name={'engineType'} text={'Гибридный'}/>
                </li>
            </ul>
        </div>
    );
};

export default EngineTypeBlock;