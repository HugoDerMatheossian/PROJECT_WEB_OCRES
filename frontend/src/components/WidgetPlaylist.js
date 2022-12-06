import React, { useEffect, useState } from 'react';
import axios from "axios"

export const WidgetPlaylist = () => {
    return (
        <div className="playlistBody">
            <div className="header">
                <u><h1>Our Anime Songs Selection</h1></u>
            </div>
            <div className="VideoBox">
                <div className="video"></div>
                <button >RANDOM SONG</button>
            </div>
        </div>
    )
}

export default WidgetPlaylist
