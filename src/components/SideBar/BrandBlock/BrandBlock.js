import React, {useState} from 'react';
import Title from "../OtherElements/Title/Title";

import InputCheckBox from "../OtherElements/Inputs/CheckBox/InputCheckBox";
import s from "../SideBar.module.css";
import ShowCloseMoreBlock from "../ShowCloseMoreBlock/ShowCloseMoreBlock";


const BrandBlock = ({brand,sortDataCars}) => {

    const [heightState, setHeightState] = useState(false)

    return (
        <div >
            <Title text={'Марка'}/>
            {/*<SearchBlock*/}
            {/*    keyObject={'brand'}*/}
            {/*    data={brand}*/}
            {/*    nameBlock={'search-brand'}*/}

            {/*/>*/}

            <ul
                className={s.ul + ' ul'}
                style={{maxHeight: heightState ? 'unset' : '110px'}}
            >
                {
                    brand[0].options ?
                        brand[0].options.map(({brand}) =>

                                <li key={brand} className={s.li}>
                                    <InputCheckBox data-type={'brand'} data-name={brand} text={brand}/>
                                </li>
                        )
                        :
                        false
                }
            </ul>
            <ShowCloseMoreBlock countItems={brand[0].options.length} state={heightState} setState={setHeightState}/>
        </div>
    );
};

export default BrandBlock;