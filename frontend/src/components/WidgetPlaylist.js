import React, { useEffect, useState } from 'react';
import axios from "axios"
import './css/video.css';

const initialState = {
    NameAnime: "",
    URL: "",
    Titre_video: "",
};


export const WidgetPlaylist = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const response = await axios.get(
            "http://localhost:4000/api/videos/getAll"
        );
        if (response.status === 200) {
            setData(response.data);
        }
    };

    return (
        <div className="playlistBody">
            <div className="header">
                <u><h1>Our Anime Songs Playlist</h1></u>
            </div>
            <div className="VideoBox">
                <div className="video">
                    <div className="InfosGeneral">
                        <div className="ListVideo_Container">
                            <table className="styled-table">
                                <thead>
                                    <tr>
                                        <th>TITLE</th>
                                        <th>URL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data &&
                                        data.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{item.Titre_video}</td>
                                                    <td><a href={item.URL} target={item.URL}>{item.URL}</a></td>
                                                </tr>
                                            );
                                        })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WidgetPlaylist
