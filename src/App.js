import './App.css';
import MyChart from "./Components/Charts/Charts";
import React from "react";
import Bar from "./Components/Charts/Bar";
import DonatChart from "./Components/Charts/Donut";
import RadialBar from "./Components/Charts/RadialBar";

function App() {
    const newData = [[1, 20], [3, 35], [6, 38], [9, 47], [13, 27], [15, 30], [18, 50], [20, 37]]

    return (
        <div className="App">
            {/*<MyChart newData={newData}/>*/}
            <div className='CommonStyle'>
                {/*<Bar />*/}
                <DonatChart/>
                {/*<RadialBar/>*/}
            </div>

        </div>
    );
}

export default App;
