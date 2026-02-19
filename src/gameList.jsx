import './gamelist.css';

function GameList({ games, onSelectGame }) {
  return (
    <ul className="gamelist.css">
      {games.length > 0 ? (
        games.map(game => (
          <li
            key={game.id}
            onClick={() => onSelectGame(game.id)}
          >
            <p className='title'><span>{game.title}</span> <br /> {game.genre} | {game.platform}</p>
            <img src={game.thumbnail} alt={game.title} width="200" />
          </li>
        ))
      ) : (
        <p style={{ color: "red" }}>Aucun jeu trouvé</p>
      )}
    </ul>
  );
}

export default GameList;
