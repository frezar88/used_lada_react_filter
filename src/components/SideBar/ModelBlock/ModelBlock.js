import React, {useState} from 'react';

import Title from "../OtherElements/Title/Title";
import s from "../SideBar.module.css";
import InputCheckBox from "../OtherElements/Inputs/CheckBox/InputCheckBox";
import ShowCloseMoreBlock from "../ShowCloseMoreBlock/ShowCloseMoreBlock";

const ModelBlock = ({model}) => {

    const [heightState, setHeightState] = useState(false)
    return (
        <div>
            <Title text={'Модель'}/>
            {/*<SearchBlock*/}
            {/*    keyObject={'model'}*/}
            {/*    data={model}*/}
            {/*    nameBlock={'search-model'}*/}

            {/*/>*/}
            <ul
                className={s.ul + ' ul'}
                style={{maxHeight: heightState ? 'unset' : '110px'}}
            >
                {model[0].options ?
                    model[0].options.map((({model}) =>
                            <li key={model} className={s.li}>
                                <InputCheckBox  data-type={'model'} data-name={model} text={model}/>
                            </li>

                    ))
                    :
                    false
                }
            < /ul>
            <ShowCloseMoreBlock  countItems={model[0].options.length} state={heightState} setState={setHeightState}/>

        </div>
    );
};

export default ModelBlock;