import React from 'react'
import './css/character.css';
const CharacterList = ({ characterlist, setCharacterInfo }) => {
    return (
        <>
            {
                characterlist ? (
                    characterlist.map((character, index) => {
                        return (
                            <div>
                                <div className="card" key={index} onClick={() => setCharacterInfo(character)}>
                                    <img src={character.images.jpg.image_url} alt="characterImage" />
                                    <div className="character-info">
                                        <h4>{character.name}</h4>
                                        <h4>{character.name_kanji}</h4>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ) : "Not Found"
            }

        </>
    )
}

export default CharacterList
