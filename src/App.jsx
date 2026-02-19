import { useState, useEffect } from 'react';
import SearchFilter from './searchFilter';
import GameList from './gameList';
import GameDetails from './gameDetails';
import './App.css';

function App() {
  const [games, setGames] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedGameId, setSelectedGameId] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('/api/games');
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error("Erreur :", error);
      }
    };
    fetchGames();
  }, []);

  const filteredGames = games
    .filter(game => game.title.toLowerCase().includes(inputSearch.toLowerCase()))
    .filter(game => selectedGenre ? game.genre === selectedGenre : true)
    .filter(game => selectedPlatform ? game.platform === selectedPlatform : true)
    .slice(0,10);

  const selectedGame = games.find(game => game.id === selectedGameId);

  return (
    <div>
      <h1>Game Match</h1>

      {!selectedGame && (
        <SearchFilter
          inputSearch={inputSearch}
          setInputSearch={setInputSearch}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
          selectedPlatform={selectedPlatform}
          setSelectedPlatform={setSelectedPlatform}
          games={games}
        />
      )}

      {!selectedGame && (
        <GameList games={filteredGames} onSelectGame={setSelectedGameId} />
      )}

      {selectedGame && (
        <GameDetails game={selectedGame} onClose={() => setSelectedGameId(null)} />
      )}
    </div>
  );
}

export default App;
