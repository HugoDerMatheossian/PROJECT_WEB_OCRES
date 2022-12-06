import React, { useEffect, useState } from 'react';
import axios from "axios"
import Chart from "./Chart";

export const Animechart = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getStats();
    }, [])

    const getStats = async () => {
        const response = await axios.get("http://localhost:4000/api/stats/getAll");
        if (response.status === 200) {
            setData(response.data);
        }
    };

    return (
        <>
            {
                <div className="chart">
                    <div className="header">
                        <u><h1>US adult popularity of anime(%)</h1></u>
                    </div>
                    <div className='graph'>
                        <Chart data={data} />
                    </div>
                </div>
            }

        </>
    )
}

export default Animechart
