import React, { useEffect, useState } from "react";
import './App.css';
import AnimeList from "./components/AnimeList";
import AnimeInfo from "./components/AnimeInfo";


function App() {

  const [search, setSearch] = useState('Naruto');
  const [animeData, setAnimeData] = useState();
  const [animeInfo, setAnimeInfo] = useState()

  const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20&score=0&sfw`)
    const resData = await res.json();
    setAnimeData(resData.data)
  }
  useEffect(() => {
    getData()
  }, [search])

  return (
    <div className="App">
      <header>
        <h1>The<strong>Anime</strong>Nest</h1>
        <div className="search-box">
          <input type="search" placeholder="Search your anime"
            onChange={(e) => setSearch(e.target.value)} />
        </div>
      </header>

      <div className="container">
        <div className="animeInfo">
          {animeInfo && <AnimeInfo animeInfo={animeInfo} />}
        </div>
        <div className="row">
          <AnimeList
            animelist={animeData}
            setAnimeInfo={setAnimeInfo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;