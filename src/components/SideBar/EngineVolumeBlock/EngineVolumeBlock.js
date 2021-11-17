import React, {useState} from 'react';
import Title from "../OtherElements/Title/Title";
import s from "../SideBar.module.css";
import InputCheckBox from "../OtherElements/Inputs/CheckBox/InputCheckBox";
import ShowCloseMoreBlock from "../ShowCloseMoreBlock/ShowCloseMoreBlock";

const EngineVolumeBlock = ({volume}) => {
    const [heightState, setHeightState] = useState(false)
    return (
        <div>
            <Title text={'Обьём двигателя'}/>

            <ul
                className={s.ul + ' ul'}
                style={{maxHeight: heightState ? 'unset' : '110px'}}
            >
                {volume[0].options ?
                    volume[0].options.sort((a, b) => a['engine_volume'] - b['engine_volume'])
                        .filter(item=>item['engine_volume'])
                        .map((({engine_volume}) =>
                            <li key={engine_volume} className={s.li}>
                                <InputCheckBox data-type={"engineVolume"} data-name={engine_volume}
                                               text={engine_volume}/>
                            </li>
                    ))
                    :
                    false
                }
            </ul>
            <ShowCloseMoreBlock  countItems={volume[0].options.length} state={heightState} setState={setHeightState}/>
        </div>
    );
};

export default EngineVolumeBlock;