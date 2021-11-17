import React from 'react';
import InputCheckBox from "../OtherElements/Inputs/CheckBox/InputCheckBox";




const CertifiedAutosBlock = () => {
    return (
        <div>
            <InputCheckBox data-type={'certified-cars'} data-name={'certified-cars'} text={'Сертифицированные авто'} />
        </div>
    );
};

export default CertifiedAutosBlock;