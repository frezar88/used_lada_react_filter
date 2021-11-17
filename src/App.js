import React, {useState} from 'react';
import s from './App.module.css'
import SideBar from "./Blocks/SideBar";
import ResultBlock from "./Blocks/ResultBlock";

const App = () => {
    const [cars, setCars] = useState('')
    const [stateSort, setStateSort] = useState({})
    return (
        <main className={s.main}>
            <div className={s.wrapper}>
                <SideBar stateSort={stateSort} setStateSort={setStateSort} setCars={setCars}/>
                <ResultBlock stateSort={stateSort} setStateSort={setStateSort} cars={cars}  setCars={setCars}/>
            </div>
        </main>
    );
};


export default App;
