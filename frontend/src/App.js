import './App.css';
import { useState, useEffect } from 'react'
import Header from './components/Header.js';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <SideBar topAnime={topAnime} />
        <MainContent />
      </div>
    </div>
  );
}
export default App;
