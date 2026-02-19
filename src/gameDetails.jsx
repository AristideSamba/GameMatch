import './gamedetails.css';

function GameDetails({ game, onClose }) {
  return (
    <div className="details">
      <img src={game.thumbnail} alt={game.title} width="300" style={{ marginBottom: "15px" }} />
      <div className='description'>
        <h2>{game.title}</h2>
      <p><strong>Description :</strong> {game.short_description || game.description}</p>
      <p>
        <strong>Lien officiel : </strong>
        <a href={game.game_url} target="_blank" rel="noopener noreferrer">Jouer ici</a>
      </p>
      <button onClick={onClose} style={{ marginTop: "10px", padding: "6px 12px" }}>Fermer</button>
      </div>
    </div>
  );
}

export default GameDetails;
