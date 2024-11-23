import React from 'react';

export interface CardType {
  suit: 'hearts' | 'diamonds' | 'clubs' | 'spades';
  value: string;
}

interface CardProps {
  card: CardType;
  onClick?: () => void;
  isSelected?: boolean;
}

const Card: React.FC<CardProps> = ({ card, onClick, isSelected }) => {
  const { suit, value } = card;
  
  const getSuitSymbol = (suit: string) => {
    switch (suit) {
      case 'hearts': return '♥';
      case 'diamonds': return '♦';
      case 'clubs': return '♣';
      case 'spades': return '♠';
      default: return '';
    }
  };

  const isRed = suit === 'hearts' || suit === 'diamonds';

  return (
    <div 
      className={`card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      style={{
        color: isRed ? 'red' : 'black',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '10px',
        margin: '5px',
        cursor: 'pointer',
        backgroundColor: isSelected ? '#e0e0e0' : 'white',
      }}
    >
      <div className="card-value">{value}</div>
      <div className="card-suit">{getSuitSymbol(suit)}</div>
    </div>
  );
};

export default Card;
