import React, {useState} from 'react';
import Title from "../OtherElements/Title/Title";
import s from "../SideBar.module.css";
import InputCheckBox from "../OtherElements/Inputs/CheckBox/InputCheckBox";
import ShowCloseMoreBlock from "../ShowCloseMoreBlock/ShowCloseMoreBlock";

const DriveBlock = ({drive}) => {
    const [heightState, setHeightState] = useState(false)
    return (
        <div>
            <Title text={'Привод'}/>

            <ul className={s.ul + ' ul'}
                style={{maxHeight: heightState ? 'unset' : '110px'}}
            >
                {drive[0].options ?
                    drive[0].options.filter(item=>item['drive_type']).map((({drive_type}) =>
                            <li key={drive_type} className={s.li}>
                                <InputCheckBox data-type={"drive"} data-name={drive_type}
                                               text={drive_type}/>
                            </li>
                    ))
                    :
                    false
                }

            </ul>
            <ShowCloseMoreBlock  countItems={drive[0].options.length} state={heightState} setState={setHeightState}/>
        </div>
    );
};

export default DriveBlock;