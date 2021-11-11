import React from 'react';
import s from './SideBar.module.css'
import CertifiedAutosBlock from "../components/SideBar/CertifiedAutosBlock/CertifiedAutosBlock";
import PriceBlock from "../components/SideBar/PriceBlock/PriceBlock";
import YearsBlock from "../components/SideBar/YearsBlock/YearsBlock";
import BrandBlock from "../components/SideBar/BrandBlock/BrandBlock";
import ModelBlock from "../components/SideBar/ModelBlock/ModelBlock";
import EngineTypeBlock from "../components/SideBar/EngineTypeBlock/EngineTypeBlock";
import EngineVolumeBlock from "../components/SideBar/EngineVolumeBlock/EngineVolumeBlock";
import EngineCapacityBlock from "../components/SideBar/EngineCapacityBlock/EngineCapacityBlock";
import TransmissionBlock from "../components/SideBar/TransmissionBlock/TransmissionBlock";
import DriveBlock from "../components/SideBar/DriveBlock/DriveBlock";
import BodyTypeBlock from "../components/SideBar/BodyTypeBlock/BodyTypeBlock";
import СarPositionBlock from "../components/SideBar/CarPositionBlock/СarPositionBlock";
import SortBlock from "../components/SideBar/SortBlock/SortBlock";


const SideBar = () => {
    return (
        <div className={s.sideBar}>
            <form>
                <CertifiedAutosBlock/>
                <PriceBlock/>
                <YearsBlock/>
                <BrandBlock/>
                <ModelBlock/>
                <EngineTypeBlock/>
                <EngineVolumeBlock/>
                <EngineCapacityBlock/>
                <TransmissionBlock/>
                <DriveBlock/>
                <BodyTypeBlock/>
                <СarPositionBlock/>
                <SortBlock/>
            </form>
        </div>
    );
};

export default SideBar;