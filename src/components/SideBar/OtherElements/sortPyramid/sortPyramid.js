import React, {useEffect, useState} from 'react';
import s from './sortPyramid.module.css'

const SortPyramid = ({stateInput,setStateSort}) => {
    const [stateClass, setStateClass] = useState(s.div)
    const [stateSortInner, setStateSortInner] = useState(0)

    useEffect(() => {

            if (stateInput ) {
                setStateClass(s.active_asc)
                if (stateSortInner) {
                    setStateClass(s.active_desc)
                }
            } else {
                setStateClass(s.div)
            }
            if (setStateSort){
                setStateSort({
                    status:stateInput,
                    sortType:stateSortInner
                })
            }

    }, [stateInput, stateSortInner,setStateSort,])
    const setSort = () => {
        if (stateInput) {
            if (stateSortInner) {
                setStateSortInner(0)
            } else {
                setStateSortInner(stateSortInner + 1)
            }
        }
    }
    return (
        <div onClick={setSort} className={stateClass} style={{padding: '5px'}}>
            <div></div>
        </div>
    );
};

export default SortPyramid;