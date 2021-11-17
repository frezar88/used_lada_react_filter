import React, {useState} from 'react';
import Title from "../OtherElements/Title/Title";
import s from "../SideBar.module.css";
import InputCheckBox from "../OtherElements/Inputs/CheckBox/InputCheckBox";
import ShowCloseMoreBlock from "../ShowCloseMoreBlock/ShowCloseMoreBlock";


const EngineTypeBlock = ({type}) => {
    const [heightState, setHeightState] = useState(false)
    return (
        <div>
            <Title text={'Тип двигателя'}/>
            <ul className={s.ul + ' ul'}
                style={{maxHeight: heightState ? 'unset' : '110px'}}
            >

                {type[0].options ?
                    type[0].options.map((({type}) =>
                            <li key={type} className={s.li}>
                                <InputCheckBox data-type={"engineType"} data-name={type} text={type}/>
                            </li>
                    ))
                    :
                    false
                }
            </ul>
            <ShowCloseMoreBlock  countItems={type[0].options.length} state={heightState} setState={setHeightState}/>
        </div>
    );
};

export default EngineTypeBlock;