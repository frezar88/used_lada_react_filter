import React from 'react';
import s from './App.module.css'
import SideBar from "./Blocks/SideBar";
import ResultBlock from "./Blocks/ResultBlock";

const App = () => {
    return (
        <main className={s.main}>
            <div className={s.wrapper}>
                <SideBar/>
                <ResultBlock/>
            </div>
        </main>
    );
};


export default App;
