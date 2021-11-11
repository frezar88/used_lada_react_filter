import React, {useEffect, useState} from 'react';
import s from './sortPyramid.module.css'

const SortPyramid = (props) => {
    const [stateClass, setStateClass] = useState(s.div)
    const [stateSort, setStateSort] = useState(0)

    useEffect(() => {
        if (props.stateInput) {
            setStateClass(s.active_asc)
            if (stateSort) {
                setStateClass(s.active_desc)
            }
        } else {
            setStateClass(s.div)
        }
    }, [props.stateInput, stateSort])
    const setSort = () => {
        if (props.stateInput) {
            if (stateSort) {
                setStateSort(0)
            } else {
                setStateSort(stateSort + 1)
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