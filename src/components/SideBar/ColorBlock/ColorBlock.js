import React, {useState} from 'react';
import Title from "../OtherElements/Title/Title";
import s from "../SideBar.module.css";
import InputCheckBox from "../OtherElements/Inputs/CheckBox/InputCheckBox";
import ShowCloseMoreBlock from "../ShowCloseMoreBlock/ShowCloseMoreBlock";

const ColorBlock = ({color}) => {
    const [heightState, setHeightState] = useState(false)
    return (
        <div>
            <Title text={'Цвет'}/>
            <ul
                className={s.ul + ' ul'}
                style={{maxHeight: heightState ? 'unset' : '110px'}}
            >
                {
                    color[0].options ?
                        color[0].options.filter(item=>item.color).map((({color}) =>
                                <li key={color}  className={s.li}>
                                    <InputCheckBox data-type={'color'} data-name={color} text={color}/>
                                </li>
                        ))
                        :
                        false
                }
            </ul>
            <ShowCloseMoreBlock countItems={color[0].options.length} state={heightState} setState={setHeightState}/>
        </div>
    );
};

export default ColorBlock;