import React from 'react';
import Title from "../OtherElements/Title/Title";
import s from "../SideBar.module.css";
import InputCheckBox from "../OtherElements/Inputs/CheckBox/InputCheckBox";

const TransmissionBlock = () => {
    return (
        <div>
            <Title text={'КПП'}/>

            <ul className={s.ul + ' ul'}>
                <li className={s.li}>
                    <InputCheckBox data-name={'transmission'} text={'Механическая'}/>
                </li>
                <li className={s.li}>
                    <InputCheckBox data-name={'transmission'} text={'JH3'}/>
                </li>
                <li className={s.li}>
                    <InputCheckBox data-name={'transmission'} text={'Автоматическая'}/>
                </li>
            </ul>
        </div>
    );
};

export default TransmissionBlock;