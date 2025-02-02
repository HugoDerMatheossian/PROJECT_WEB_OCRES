import React from 'react'
import './css/character.css';
const CharacterInfo = (props) => {
    const { name, images: { jpg: { image_url } }/*, anime: { anime: { title } }*/, about, name_kanji, nicknames } = props.characterInfo;

    return (
        <>
            <div className="character-content">
                <h3>{name}</h3><br />
                <div className="character-kanji">
                    <h3>{name_kanji}</h3><br />
                </div>
                <img src={image_url} alt="" /><br /><br />
                <div className="info-character">
                    {/* <h3>Anime:  </h3><br /> */}
                    <div className="character-nicknames">
                        <h3><u>Nicknames:</u> {nicknames}</h3><br />
                    </div>
                    <div className="character-about">
                        <h4><u>ABOUT:</u> <i>{about}</i></h4>
                    </div>
                </div>
            </div></>
    )
}

export default CharacterInfo
