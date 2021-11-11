import React, {useState} from 'react';
import s from './SortBlock.module.css'
import SortPyramid from "../../SideBar/OtherElements/sortPyramid/sortPyramid";

const SortBlock = () => {
    const [state,setState]=useState(0)
    const onOffSort = () => {
      if (state){
          setState(0)
      }else{
          setState(1)
      }
    }
    return (
        <div className={s.div}>
            <p onClick={onOffSort} className={s.p}>Сортировать по <span style={{fontWeight:'bold',color:state?'red':'black'}}>цене</span></p>
            <SortPyramid stateInput={state}/>
        </div>
    );
};

export default SortBlock;