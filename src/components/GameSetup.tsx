import React, { useState } from 'react';

interface GameSetupProps {
  onStartGame: (players: string[]) => void;
}

const GameSetup: React.FC<GameSetupProps> = ({ onStartGame }) => {
  const [players, setPlayers] = useState<string[]>(['', '', '']);
  const [error, setError] = useState<string>('');

  const handlePlayerNameChange = (index: number, name: string) => {
    const newPlayers = [...players];
    newPlayers[index] = name;
    setPlayers(newPlayers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filledPlayers = players.filter(name => name.trim() !== '');
    
    if (filledPlayers.length < 2) {
      setError('At least 2 players are required');
      return;
    }

    onStartGame(filledPlayers);
  };

  return (
    <div className="game-setup">
      <h2>Welcome to Family Rummy!</h2>
      <form onSubmit={handleSubmit}>
        <div className="players-input">
          {players.map((player, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Player ${index + 1} name`}
              value={player}
              onChange={(e) => handlePlayerNameChange(index, e.target.value)}
              className="player-input"
            />
          ))}
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="start-button">
          Start Game
        </button>
      </form>
    </div>
  );
};

export default GameSetup;
