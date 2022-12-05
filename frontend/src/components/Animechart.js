import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const Animechart = (topList) => {

    const data = [
        {
            name: 'name1',
            rank: 1,
            score: 4.5,
            popularity: 10,
        },
        {
            name: 'name2',
            rank: 2,
            score: 4.4,
            popularity: 9,
        },
        {
            name: 'name3',
            rank: 3,
            score: 4.2,
            popularity: 9,
        },
        {
            name: 'name4',
            rank: 4,
            score: 4.5,
            popularity: 8,
        },
        {
            name: 'name5',
            rank: 5,
            score: 4.0,
            popularity: 6,
        },
        {
            name: 'name6',
            rank: 6,
            score: 3.9,
            popularity: 7,
        },

    ];



    return (
        <>
            {
                topList ? (

                    <div className="chart">
                        <div className="header">
                            <u><h1>Top anime currently</h1></u>
                        </div>
                        <div className='graph'>
                            <ResponsiveContainer width="100%" height="80%" >
                                <BarChart width={150} height={40} data={data} margin={{ top: 35, right: 40, left: 5 }}>
                                    <Bar dataKey="rank" fill="#A84FFF" />
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="score" fill="#8884d8" />
                                    <Bar dataKey="popularity" fill="#82ca9d" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                ) : "Not Found "
            }

        </>
    )
}

export default Animechart
