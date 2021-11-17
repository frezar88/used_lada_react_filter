import React, {useState} from 'react';
import Title from "../OtherElements/Title/Title";
import s from "../SideBar.module.css";
import InputCheckBox from "../OtherElements/Inputs/CheckBox/InputCheckBox";
import ShowCloseMoreBlock from "../ShowCloseMoreBlock/ShowCloseMoreBlock";

const СarPositionBlock = ({car_position}) => {

    const [heightState, setHeightState] = useState(false)
    return (
        <div>
            <Title text={'Месторасположение'}/>

            <ul className={s.ul + ' ul'}
                style={{maxHeight: heightState ? 'unset' : '110px'}}
            >
                {car_position[0].options ?
                    car_position[0].options.map((({position}) =>
                            <li key={position}  className={s.li}>
                                <InputCheckBox data-type={"drive_type"} data-name={position}
                                               text={position}/>
                            </li>
                    ))
                    :
                    false
                }
            </ul>
            <ShowCloseMoreBlock  countItems={car_position[0].options.length} state={heightState} setState={setHeightState}/>
        </div>
    );
};

export default СarPositionBlock;