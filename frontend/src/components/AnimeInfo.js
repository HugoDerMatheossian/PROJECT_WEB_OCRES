import React from 'react'
import './css/anime.css';
export const AnimeInfo = (props) => {
    const { title, images: { jpg: { large_image_url } }, source, rank, score, popularity, status, duration } = props.animeInfo;
    return (
        <>
            <div className="anime-content">
                <h3>{title}</h3><br />
                <img src={large_image_url} alt="" /><br /><br />
                <div className="info">
                    <h3>#Rank: {rank}</h3>
                    <h3>#Score: {score}</h3>
                    <h3>#Popularity: {popularity}</h3><hr /><br />
                    <h4>Source:{source}</h4>
                    <h4>Duration:{duration}</h4>
                    <h4>Status:{status}</h4>
                </div>
            </div>
        </>
    )
}

export default AnimeInfo
