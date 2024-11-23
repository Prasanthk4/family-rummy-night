import React, { useState, useEffect } from 'react';
import PlayerPanel from './PlayerPanel';
import { CardType } from './Card';

interface GameBoardProps {
  players: string[];
  onGameEnd: (scores: { [key: string]: number }) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ players, onGameEnd }) => {
  const [deck, setDeck] = useState<CardType[]>([]);
  const [playerCards, setPlayerCards] = useState<{ [key: string]: CardType[] }>({});
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [selectedCards, setSelectedCards] = useState<CardType[]>([]);

  // Initialize deck and deal cards
  useEffect(() => {
    const suits: CardType['suit'][] = ['hearts', 'diamonds', 'clubs', 'spades'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    
    const newDeck = suits.flatMap(suit =>
      values.map(value => ({ suit, value }))
    );

    // Shuffle deck
    const shuffledDeck = [...newDeck].sort(() => Math.random() - 0.5);
    
    // Deal 13 cards to each player
    const dealtCards: { [key: string]: CardType[] } = {};
    players.forEach((player, index) => {
      dealtCards[player] = shuffledDeck.slice(index * 13, (index + 1) * 13);
    });

    setDeck(shuffledDeck.slice(players.length * 13));
    setPlayerCards(dealtCards);
  }, [players]);

  const handleCardSelect = (card: CardType) => {
    const currentPlayer = players[currentPlayerIndex];
    if (selectedCards.some(c => c.suit === card.suit && c.value === card.value)) {
      setSelectedCards(selectedCards.filter(c => !(c.suit === card.suit && c.value === card.value)));
    } else {
      setSelectedCards([...selectedCards, card]);
    }
  };

  const handleNextTurn = () => {
    setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
    setSelectedCards([]);
  };

  const handleDeclare = () => {
    // Add rummy rules validation here
    const scores = players.reduce((acc, player) => {
      acc[player] = 0; // Calculate scores based on remaining cards
      return acc;
    }, {} as { [key: string]: number });
    
    onGameEnd(scores);
  };

  return (
    <div className="game-board">
      <div className="deck-info">
        <p>Cards in deck: {deck.length}</p>
      </div>
      
      {players.map((player, index) => (
        <PlayerPanel
          key={player}
          playerName={player}
          cards={playerCards[player] || []}
          isCurrentTurn={currentPlayerIndex === index}
          onCardSelect={currentPlayerIndex === index ? handleCardSelect : undefined}
          selectedCards={selectedCards}
        />
      ))}

      <div className="game-controls">
        <button onClick={handleNextTurn}>Next Turn</button>
        <button onClick={handleDeclare}>Declare</button>
      </div>
    </div>
  );
};

export default GameBoard;
