import React, {useState} from 'react';
import SearchBlock from "../OtherElements/SearchBlock/SearchBlock";
import Title from "../OtherElements/Title/Title";
import s from "../SideBar.module.css";
import InputCheckBox from "../OtherElements/Inputs/CheckBox/InputCheckBox";
import ShowCloseMoreBlock from "../ShowCloseMoreBlock/ShowCloseMoreBlock";

const ModelBlock = () => {
    const [heightState,setHeightState]=useState(false)
    return (
        <div>
            <Title text={'Модель'}/>
            <SearchBlock/>
            <ul
                className={s.ul + ' ul'}
                style={{maxHeight:heightState?'900':'110px'}}
            >
                <li className={s.li}>
                    <InputCheckBox data-name={'model'} text={'Sandero'}/>
                </li>
                <li className={s.li}>
                    <InputCheckBox data-name={'model'} text={'Duster'}/>
                </li>
                <li className={s.li}>
                    <InputCheckBox data-name={'model'} text={'Logan'}/>
                </li>
                <li className={s.li}>
                    <InputCheckBox data-name={'model'} text={'Kaptur'}/>
                </li>
                <li className={s.li}>
                    <InputCheckBox data-name={'model'} text={'Renault'}/>
                </li>
                <li className={s.li}>
                    <InputCheckBox data-name={'model'} text={'Renault'}/>
                </li>
                <li className={s.li}>
                    <InputCheckBox data-name={'model'} text={'Renault'}/>
                </li>
                <li className={s.li}>
                    <InputCheckBox data-name={'model'} text={'Renault'}/>
                </li>

            </ul>
            <ShowCloseMoreBlock state={heightState} setState={setHeightState}/>

        </div>
    );
};

export default ModelBlock;