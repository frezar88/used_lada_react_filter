import React, {useState} from 'react';
import CertifiedAutosBlock from "../CertifiedAutosBlock/CertifiedAutosBlock";
import PriceBlock from "../PriceBlock/PriceBlock";
import YearsBlock from "../YearsBlock/YearsBlock";
import BrandBlock from "../BrandBlock/BrandBlock";
import ModelBlock from "../ModelBlock/ModelBlock";
import EngineTypeBlock from "../EngineTypeBlock/EngineTypeBlock";
import EngineVolumeBlock from "../EngineVolumeBlock/EngineVolumeBlock";
import EngineCapacityBlock from "../EngineCapacityBlock/EngineCapacityBlock";
import TransmissionBlock from "../TransmissionBlock/TransmissionBlock";
import DriveBlock from "../DriveBlock/DriveBlock";
import BodyTypeBlock from "../BodyTypeBlock/BodyTypeBlock";
import СarPositionBlock from "../CarPositionBlock/СarPositionBlock";
import {getCurrentCars} from "../../../http/Requests";
import ColorBlock from "../ColorBlock/ColorBlock";


// {
//     'color': ["белый перламутр"],
//     'drive': ["передний привод (2WD)", "полный привод (4WD)"],
//     'engine': {
//         'бензин': ["2,0", "2,4", "1,5"],
//             'дизель':"2,4 турбодизель"],
//     },
//     'model': {
//         'Outlander': ["City Yandex", "City Ultimate", "City Black"],
//     }
//     'ASX': ["City Intense", "City Black"]
//     'L200': ["Instyle+", "Intense+"]
//     'Outlander': ["City Yandex", "City Ultimate", "City Black"]
//     'EclipseCross': ["Ultimate", "City Intense", "City Instyle"],
//     'page': 0,
//     'state': ["Новый"],
//     'transmission': ["автомат (CVT)", "автомат"],
//     'year': ["2021"]
// }

const SideBarForm = ({filters, setCars}) => {
    const [requestData, setRequestData] = useState({
        'certified-cars': false,
        'brand': [],
        'model': [],
        'engineType': [],
        'engineVolume': [],
        'engineCapacity': {min: null, max: null},
        'drive': [],
        'price': {min: null, max: null},
        'year': {min: null, max: null},
        'body_type': [],
        'color': [],
        'car_position': [],
        'mileage': [],
        'transmission': [],
    })


    const change = (e) => {
        createDataCheckbox(requestData, e)
        createDateRange(requestData, e)

    }

    const getCars = () => {
        getCurrentCars(requestData).then((data) => {
            setCars(data.data['cars'])
        })
    }

    const debounce = (fn, ms) => {
        let timeout;
        return function () {
            const fnCall = () => {
                console.log(requestData)
                fn.apply(this, arguments);
            };
            clearTimeout(timeout);
            timeout = setTimeout(fnCall, ms);
        };
    };

    let debounceGetCars = debounce(getCars, 1000);

    const createDataCheckbox = (data, e) => {

        if (
            e.target.type === 'checkbox' &&
            e.target.attributes['data-type'].value !== 'sort' &&
            e.target.attributes['data-type'].value !== 'certified-cars'
        ) {
            let type = e.target.attributes['data-type'].value
            let value = e.target.attributes['data-name'].value
            if (e.target.checked && data[type].indexOf(value) === -1) {
                data[type].push(value)
                setRequestData(data)
            } else {
                data[type] = data[type].filter(item => item !== value)
                setRequestData(data)
            }

            debounceGetCars()
        }else{
            if (e.target.attributes['data-type'].value==='certified-cars'){
                let type = e.target.attributes['data-type'].value
                data[type] =  e.target.checked
                setRequestData(data)
                getCars()
            }
            if (e.target.attributes['data-type'].value==='sort'){
                console.log(e.target)
            }
            if(e.target.attributes['data-type'].value==='search'){
                // console.log(e.target)
            }

        }

    }
    const createDateRange = (data, e) => {
        if (e.target.type === 'range') {
            let type = e.target.attributes['data-type'].value
            let name = e.target.attributes['data-name'].value
            if (name === 'min') {
                data[type].min = e.target.value
                if (e.target.min === e.target.value) {
                    data[type].min = null
                }
                setRequestData(data)
            } else {
                data[type].max = e.target.value
                if (e.target.max === e.target.value) {
                    data[type].max = null
                }
                setRequestData(data)
            }
            debounceGetCars()
        }
    }

    return (
        <form onChange={(e) => change(e)}>
            <CertifiedAutosBlock/>
            <PriceBlock price={filters.filter(item => item.id === "price")}/>
            <YearsBlock year={filters.filter(item => item.id === "year")}/>
            <BrandBlock brand={filters.filter(item => item.id === "brand")}/>
            <ModelBlock model={filters.filter(item => item.id === "model")}/>
            <EngineTypeBlock type={filters.filter(item => item.id === "engineType")}/>
            <EngineVolumeBlock volume={filters.filter(item => item.id === "engineVolume")}/>
            <EngineCapacityBlock engineCapacity={filters.filter(item => item.id === "engineCapacity")}/>
            <TransmissionBlock transmission={filters.filter(item => item.id === "transmission")}/>
            <DriveBlock drive={filters.filter(item => item.id === "drive")}/>
            <BodyTypeBlock body_type={filters.filter(item => item.id === "body_type")}/>
            <ColorBlock color={filters.filter(item => item.id === "color")}/>
            <СarPositionBlock car_position={filters.filter(item => item.id === "car_position")}/>
            {/*<SortBlock />*/}

        </form>
    );
};

export default SideBarForm;