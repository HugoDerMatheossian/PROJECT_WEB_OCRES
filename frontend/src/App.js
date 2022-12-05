import React, { useEffect, useState } from "react";
import './App.css';
import AnimeList from "./components/AnimeList";
import AnimeInfo from "./components/AnimeInfo";
import CharacterList from "./components/CharacterList";
import CharacterInfo from "./components/CharacterInfo";
import Quotes from "./components/Quotes";
import Animechart from "./components/Animechart";
import WidgetWebsites from "./components/WidgetWebsites";

function App() {

  const [search, setSearch] = useState('');
  const [animeData, setAnimeData] = useState();
  const [animeInfo, setAnimeInfo] = useState();

  const [searchCharacter, setSearchCharacter] = useState('');
  const [characterData, setCharacterData] = useState();
  const [characterInfo, setCharacterInfo] = useState();

  const [quote, setQuote] = useState({
    anime: null,
    character: null,
    quote: null
  });

  const [animeTopData, setAnimeTopData] = useState('');

  const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=12&score=0&sfw`)
    const resCharacter = await fetch(`https://api.jikan.moe/v4/characters?q=${searchCharacter}&limit=12&sfw/full`)

    const resData = await res.json();
    const resDataCharacter = await resCharacter.json();

    setAnimeData(resData.data)
    setCharacterData(resDataCharacter.data)
  }

  const fetchTop = async () => {
    const resTop = await fetch(`https://api.jikan.moe/v4/top/anime?limit=6`);
    const resDataTop = await resTop.json();

    setAnimeTopData(resDataTop.data)
  }

  const FetchQuote = async () => {
    return await fetch("https://animechan.vercel.app/api/random")
      .then(response => response.json());
  }

  const generate = async () => {
    setQuote(await FetchQuote());
  }

  useEffect(() => {
    getData()
    fetchTop()
  }, [search, searchCharacter])

  return (
    <div className="App">
      <header>
        <img src="png-transparent-red-cloud-illustration-china-papercutting-chinese-new-year-red-chinese-style-clouds-decoupage-other-text-cloud_1_-removebg-preview.png" alt="cloud1" /><h1>The<strong>Anime</strong>Nest</h1><img src="png-transparent-red-cloud-illustration-china-papercutting-chinese-new-year-red-chinese-style-clouds-decoupage-other-text-cloud_1_-removebg-preview.png" alt="cloud2" />
      </header>
      <div className="first-row">
        <div className="container">
          <div className="animeInfo">
            {animeInfo && <AnimeInfo animeInfo={animeInfo} />}
          </div>
          <div className="anime-body">
            <div className="anime-header">
              <u><h1>Find an Anime</h1></u>
              <input type="search" placeholder="Search an anime"
                onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className="row">
              <AnimeList
                animelist={animeData}
                setAnimeInfo={setAnimeInfo}
              />
            </div>
          </div>
        </div>

        <div className="container2">
          <div className="characterInfo">
            {characterInfo && <CharacterInfo characterInfo={characterInfo} />}
          </div>
          <div className="character-body">
            <div className="character-header">
              <u><h1>Find a Character</h1></u>
              <input type="search" placeholder="Search a character"
                onChange={(e) => setSearchCharacter(e.target.value)} />
            </div>
            <div className="row">
              <CharacterList
                characterlist={characterData}
                setCharacterInfo={setCharacterInfo}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="second-row">
        <div className="container">
          <Quotes quote={quote} />
          <button onClick={generate}>Generate new quote</button>
        </div>
        <div className="container2">
          <Animechart
            topList={animeTopData}
          />
        </div>
      </div>

      <div className="third-row">
        <div className="container"><WidgetWebsites /></div>
        <div className="container2"></div>
      </div>

    </div>
  );
}

export default App;