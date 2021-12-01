import React, {useEffect} from 'react';
import s from './SideBar.module.css'

import SideBarForm from "../components/SideBar/SideBarForm/SideBarForm";


const SideBar = ({setFilteredCars,filteredCars,filters,sortDataCars,setFilters}) => {
    useEffect(()=>{

        let data = [
            {id:"brand",name: "Марка",options:[]},
            {id:"model",name:"Модель",options:[]},
            {id:"engineType",name:"Тип двигателя",options:[]},
            {id:"engineVolume",name:"Объем двигателя",options:[]},
            {id:"engineCapacity",name:"Мощность двигателя",options:[{min: '81',max: '231'}]},
            {id:"transmission",name:"КПП",options:[{min: '81',max: '231'}]},
            {id:"drive",name:"Привод",options:[]},
            {id:"price",name:"Цена",options:[{min: "6600",max: "79900"}]},
            {id:"year",name:"Год",options:[{min: "2009",max: "2020"}]},
            {id:"color",name:"Цвет",options:[]},
            {id:"body_type",name:"Тип кузова",options:[]},
            {id:"car_position",name:"Месторасположение",options:[]},
        ]
        const findAddData = (block,name) => {
            if (data.filter(item=>item.id ===name)[0]['options'].indexOf(block)===-1){
                if (block){
                    data.filter(item=>item.id ===name)[0]['options'].push(block)
                }
            }
            return data
        }
        sortDataCars.forEach(({brand,model,engine,transmission,kuzov,drive_type,color})=>{
             findAddData(brand,'brand')
            findAddData(model, 'model')
            findAddData(model, 'model')
            // findAddData(engine.capacity_engine, 'capacity_engine')
            // findAddData(engine.type, 'engine_type')
            // findAddData(engine.type, 'engine_type')
            findAddData(transmission, 'transmission')
            // findAddData(drive_type, 'drive_type')
            // findAddData(kuzov, 'body_type')
            // findAddData(color, 'color')
        })

        console.log(data)

    },[sortDataCars])
    return (
        <div className={s.sideBar} style={filters ? {padding:'30px 20px'}:{padding: '0'}}>
            {filters ?
                <SideBarForm
                    filteredCars={filteredCars}
                    setFilteredCars={setFilteredCars}
                    filters={filters}
                />
                :
                false
            }
        </div>
    );
};

export default SideBar;