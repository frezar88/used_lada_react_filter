import React, {useState} from 'react';
import Title from "../OtherElements/Title/Title";
import s from "./SortBlock.module.css";
import InputCheckBox from "../OtherElements/Inputs/CheckBox/InputCheckBox";
import SortPyramid from "../OtherElements/sortPyramid/sortPyramid";


const SortBlock = ({setStateSort}) => {
    const [stateInput,setStateInput]=useState(false)
    return (
        <div>
            <Title text={'Сортировка'}/>

            <ul
                className={s.ul + ' ul'}
                style={
                    {
                        display: 'grid',
                        gridTemplateColumns: 'auto 1fr',
                        listStyle: 'none',
                        alignItems: 'center',
                        gridGap:10
                    }}
            >
                <li className={s.li} style={{listStyle: 'none'}}>
                    <InputCheckBox  setStateInput={setStateInput} data-type={'sort'} data-name={'transmission'} text={'По цене'}/>
                </li>
                <li >
                    <SortPyramid  stateInput={stateInput}   />
                </li>
            </ul>
        </div>
    );
};

export default SortBlock;