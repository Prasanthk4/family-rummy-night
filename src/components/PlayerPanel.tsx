import React from 'react';
import Card, { CardType } from './Card';

interface PlayerPanelProps {
  playerName: string;
  cards: CardType[];
  isCurrentTurn: boolean;
  onCardSelect?: (card: CardType) => void;
  selectedCards: CardType[];
}

const PlayerPanel: React.FC<PlayerPanelProps> = ({
  playerName,
  cards,
  isCurrentTurn,
  onCardSelect,
  selectedCards,
}) => {
  return (
    <div className={`player-panel ${isCurrentTurn ? 'current-turn' : ''}`}>
      <h3>{playerName}'s Cards {isCurrentTurn && '(Current Turn)'}</h3>
      <div className="cards-container">
        {cards.map((card, index) => (
          <Card
            key={`${card.suit}-${card.value}-${index}`}
            card={card}
            onClick={() => onCardSelect && onCardSelect(card)}
            isSelected={selectedCards.some(
              (selectedCard) =>
                selectedCard.suit === card.suit && selectedCard.value === card.value
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayerPanel;
