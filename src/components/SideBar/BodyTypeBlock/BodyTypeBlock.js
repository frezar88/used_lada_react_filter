import React, {useState} from 'react';
import Title from "../OtherElements/Title/Title";
import s from "../SideBar.module.css";
import InputCheckBox from "../OtherElements/Inputs/CheckBox/InputCheckBox";
import ShowCloseMoreBlock from "../ShowCloseMoreBlock/ShowCloseMoreBlock";

const BodyTypeBlock = ({body_type}) => {
    const [heightState, setHeightState] = useState(false)
    return (
        <div>
            <Title text={'Тип кузова'}/>

            <ul className={s.ul + ' ul'}
                style={{maxHeight: heightState ? 'unset' : '110px'}}
            >
                {body_type[0].options ?
                    body_type[0].options.map((({kuzov}) =>
                            <li key={kuzov} className={s.li}>
                                <InputCheckBox data-type={"body_type"} data-name={kuzov}
                                               text={kuzov}/>
                            </li>
                    ))
                    :
                    false
                }
            </ul>
            <ShowCloseMoreBlock  countItems={body_type[0].options.length} state={heightState} setState={setHeightState}/>
        </div>
    );
};

export default BodyTypeBlock;