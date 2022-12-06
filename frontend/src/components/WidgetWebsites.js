import React, { useEffect, useState } from 'react';
import "./WidgetWebsites.css";
import axios from "axios"

export const WidgetWebsites = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getWebsites();
    }, [])

    const getWebsites = async () => {
        const response = await axios.get("http://localhost:4000/api/websites/getAll");
        if (response.status === 200) {
            setData(response.data);
        }
    };

    console.log("data=>", data);

    return (
        <div className="widgetWebsite">
            <div className="header">
                <u><h1>Best anime streaming Websites</h1></u>
            </div>
            <div className="websitesinfos">
                <div>
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th style={{ textAlign: "center" }}>Website Name</th>
                                <th style={{ textAlign: "center" }}>Note</th>
                                <th style={{ textAlign: "center" }}>Nb Visits</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.websiteName}</td>
                                        <td>{item.score}</td>
                                        <td>{item.nbVisites}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default WidgetWebsites
