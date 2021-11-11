import React, {useState} from 'react';
import Title from "../OtherElements/Title/Title";
import SearchBlock from "../OtherElements/SearchBlock/SearchBlock";
import InputCheckBox from "../OtherElements/Inputs/CheckBox/InputCheckBox";
import s from "../SideBar.module.css";
import ShowCloseMoreBlock from "../ShowCloseMoreBlock/ShowCloseMoreBlock";


const BrandBlock = () => {
    const [heightState,setHeightState]=useState(false)

    return (
        <div>
            <Title text={'Марка'}/>
            <SearchBlock/>
            <ul
                className={s.ul + ' ul'}
                style={{maxHeight:heightState?'900':'110px'}}
            >
                <li className={s.li}>
                    <InputCheckBox data-name={'brand'} text={'Lada'}/>
                </li>
                <li className={s.li}>
                    <InputCheckBox data-name={'brand'} text={'Renault'}/>
                </li>
                <li className={s.li}>
                    <InputCheckBox data-name={'brand'} text={'Renault'}/>
                </li>
                <li className={s.li}>
                    <InputCheckBox data-name={'brand'} text={'Renault'}/>
                </li>
                <li className={s.li}>
                    <InputCheckBox data-name={'brand'} text={'Renault'}/>
                </li>

            </ul>
            <ShowCloseMoreBlock state={heightState} setState={setHeightState}/>
        </div>
    );
};

export default BrandBlock;