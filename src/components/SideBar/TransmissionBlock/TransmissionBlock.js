import React, {useState} from 'react';
import Title from "../OtherElements/Title/Title";
import s from "../SideBar.module.css";
import InputCheckBox from "../OtherElements/Inputs/CheckBox/InputCheckBox";
import ShowCloseMoreBlock from "../ShowCloseMoreBlock/ShowCloseMoreBlock";

const TransmissionBlock = ({transmission}) => {
    const [heightState, setHeightState] = useState(false)
    return (
        <div>
            <Title text={'КПП'}/>

            <ul className={s.ul + ' ul'}
                style={{maxHeight: heightState ? 'unset' : '110px'}}
            >
                {transmission[0].options ?
                    transmission[0].options.map((({transmission}) =>
                            <li key={transmission} className={s.li}>
                                <InputCheckBox data-type={"transmission"} data-name={transmission}
                                               text={transmission}/>
                            </li>
                    ))
                    :
                    false
                }

            </ul>
            <ShowCloseMoreBlock  countItems={transmission[0].options.length} state={heightState} setState={setHeightState}/>
        </div>
    );
};

export default TransmissionBlock;