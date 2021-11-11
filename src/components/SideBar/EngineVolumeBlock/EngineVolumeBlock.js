import React, {useState} from 'react';
import Title from "../OtherElements/Title/Title";
import s from "../SideBar.module.css";
import InputCheckBox from "../OtherElements/Inputs/CheckBox/InputCheckBox";
import ShowCloseMoreBlock from "../ShowCloseMoreBlock/ShowCloseMoreBlock";

const EngineVolumeBlock = () => {
    const [heightState,setHeightState]=useState(false)
    return (
        <div>
            <Title text={'Обьём двигателя'}/>

            <ul
                className={s.ul + ' ul'}
                style={{maxHeight:heightState?'900':'110px'}}
            >
                <li className={s.li}>
                    <InputCheckBox data-name={'engineVolume'} text={'1.1'}/>
                </li>
                <li className={s.li}>
                    <InputCheckBox data-name={'engineVolume'} text={'1.2'}/>
                </li>
                <li className={s.li}>
                    <InputCheckBox data-name={'engineVolume'} text={'1.3'}/>
                </li>
                <li className={s.li}>
                    <InputCheckBox data-name={'engineVolume'} text={'1.4'}/>
                </li>
                <li className={s.li}>
                    <InputCheckBox data-name={'engineVolume'} text={'2.2'}/>
                </li>
                <li className={s.li}>
                    <InputCheckBox data-name={'engineVolume'} text={'3.2'}/>
                </li>
                <li className={s.li}>
                    <InputCheckBox data-name={'engineVolume'} text={'4.2'}/>
                </li>
                <li className={s.li}>
                    <InputCheckBox data-name={'engineVolume'} text={'1.2'}/>
                </li>
                <li className={s.li}>
                    <InputCheckBox data-name={'engineVolume'} text={'1.2'}/>
                </li>

            </ul>
            <ShowCloseMoreBlock state={heightState} setState={setHeightState}/>
        </div>
    );
};

export default EngineVolumeBlock;