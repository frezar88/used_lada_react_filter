import React from 'react';
import Title from "../OtherElements/Title/Title";
import s from "../SideBar.module.css";
import InputCheckBox from "../OtherElements/Inputs/CheckBox/InputCheckBox";

const DriveBlock = () => {
    return (
        <div>
            <Title text={'Привод'}/>

            <ul className={s.ul + ' ul'}>
                <li className={s.li}>
                    <InputCheckBox data-name={'drive'} text={'передний'}/>
                </li>
                <li className={s.li}>
                    <InputCheckBox data-name={'drive'} text={'полный (4WD)'}/>
                </li>
            </ul>
        </div>
    );
};

export default DriveBlock;