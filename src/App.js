import React, {useEffect, useState} from 'react';
import s from './App.module.css'
import SideBar from "./Blocks/SideBar";
import ResultBlock from "./Blocks/ResultBlock";
import {getCurrentCars, getFilters} from "./http/Requests";
import Spinner from "./components/Spinner/Spinner";

const App = () => {
    const [filters, setFilters] = useState('')
    const [cars, setCars] = useState('')
    const [stateSort, setStateSort] = useState({})
    const [filteredCars, setFilteredCars] = useState({
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

    useEffect(() => {
        getFilters().then(data => {
            setFilters(data.data.filters)
        })
    }, [])

    useEffect(() => {
        getCurrentCars().then(data => {
            setCars(data.data.cars)
        })
    }, [])

    const sortDataCars = () => {
        if (stateSort.status && !stateSort.sortType) {
            let data = Array.from(cars)
            data.sort((a, b) => +a.price - +b.price)

            return filterData(data, filteredCars)
        } else if (stateSort.status && stateSort.sortType) {
            let data = Array.from(cars)
            data = data.sort((a, b) => +b.price - +a.price)
            return filterData(data, filteredCars)
        } else {
            return filterData(cars, filteredCars)
        }
    }
    const filterData = (data, filteredCars) => {
        let actualCars = data
            .filter(item => filteredCars.brand[0] ? filteredCars.brand.indexOf(item.brand) !== -1 : item)
            .filter(item => filteredCars.model[0] ? filteredCars.model.indexOf(item.model) !== -1 : item)
            .filter(item => filteredCars.engineType[0] ? filteredCars.engineType.indexOf(item.engine.type) !== -1 : item)
            .filter(item => filteredCars.engineVolume[0] ? filteredCars.engineVolume.indexOf(item.engine['capacity_engine']) !== -1 : item)
            .filter(item => filteredCars.transmission[0] ? filteredCars.transmission.indexOf(item.transmission) !== -1 : item)
            .filter(item => filteredCars.drive[0] ? filteredCars.drive.indexOf(item.drive_type) !== -1 : item)
            .filter(item => filteredCars.body_type[0] ? filteredCars.body_type.indexOf(item.kuzov) !== -1 : item)
            .filter(item => filteredCars.color[0] ? filteredCars.color.indexOf(item.color) !== -1 : item)
            .filter(item => filteredCars.price['min'] ? +filteredCars.price['min'] <= +item.price : item)
            .filter(item => filteredCars.price['max'] ? +filteredCars.price['max'] >= +item.price : item)
            .filter(item => filteredCars.year['min'] ? +filteredCars.year['min'] <= +item.year : item)
            .filter(item => filteredCars.year['max'] ? +filteredCars.year['max'] >= +item.year : item)
            .filter(item => filteredCars.engineCapacity['min'] ? +filteredCars.engineCapacity['min'] <= +item.engine['power_hp'] : item)
            .filter(item => filteredCars.engineCapacity['max'] ? +filteredCars.engineCapacity['max'] >= +item.engine['power_hp'] : item)
        return actualCars
    }

    return (
        <main className={s.main}>
            {
                cars && filters ?
                    <div className={s.wrapper}>
                        <SideBar
                            filters={filters}
                            sortDataCars={sortDataCars()}
                            filteredCars={filteredCars}
                            setFilteredCars={setFilteredCars}
                        />
                        <ResultBlock
                            filteredCars={filteredCars}
                            stateSort={stateSort}
                            setStateSort={setStateSort}
                            cars={cars}
                            setCars={setCars}
                            resultData={sortDataCars()}
                        />
                    </div>
                    :
                    <Spinner/>
            }
        </main>
    );
};


export default App;
