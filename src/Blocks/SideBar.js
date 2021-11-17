import React, {useEffect, useState} from 'react';
import s from './SideBar.module.css'
import {getFilters} from "../http/Requests";
import SideBarForm from "../components/SideBar/SideBarForm/SideBarForm";


const SideBar = ({setCars}) => {
    const [filters, setFilters] = useState('')
    useEffect(() => {
        getFilters().then(data => {
            setFilters(data.data.filters)
        })
    }, [])
    return (
        <div className={s.sideBar} style={filters ? {padding:'30px 20px'}:{padding: '0'}}>
            {filters ?
                <SideBarForm  setCars={setCars}  filters={filters}/>
                :
                false
            }
        </div>
    );
};

export default SideBar;