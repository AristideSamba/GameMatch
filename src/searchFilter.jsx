function SearchFilter({ inputSearch, setInputSearch, selectedGenre, setSelectedGenre, selectedPlatform, setSelectedPlatform, games }) {
  const genres = [...new Set(games.map(game => game.genre))];
  const platforms = [...new Set(games.map(game => game.platform))];

  return (
    <>
      <input
        type="text"
        placeholder="Rechercher un jeu..."
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
        style={{ padding: "8px", width: "300px", marginBottom: "20px" }}
      />

      <nav style={{ marginBottom: "10px" }}>
        <span style={{ marginRight: "10px" }}>Filtrer par genre:</span>
        <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
          <option value="">Tous les genres</option>
          {genres.map(genre => <option key={genre} value={genre}>{genre}</option>)}
        </select>
      </nav>

      <nav style={{ marginBottom: "20px" }}>
        <span style={{ marginRight: "10px" }}>Filtrer par plateforme:</span>
        <select value={selectedPlatform} onChange={(e) => setSelectedPlatform(e.target.value)}>
          <option value="">Toutes les plateformes</option>
          {platforms.map(platform => <option key={platform} value={platform}>{platform}</option>)}
        </select>
      </nav>
    </>
  );
}

export default SearchFilter;
