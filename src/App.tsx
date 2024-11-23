import React from 'react';
import './App.css';
import rummyImage from './assets/rummy-cards.svg';

function App() {
  return (
    <div className="App">
      <div className="invitation-card">
        <div className="floating-cards left">♠</div>
        <div className="floating-cards right">♥</div>
        <div className="floating-cards top">♣</div>
        <div className="floating-cards bottom">♦</div>
        
        <div className="card-content">
          <div className="sparkles">✨</div>
          <div className="ribbon">
            <span>Special Event</span>
          </div>
          
          <h1>Game Night!</h1>
          <div className="card-image">
            <img src={rummyImage} alt="Rummy Cards" />
          </div>
          
          <div className="golden-line"></div>
          <h2>You're Invited!</h2>
          <h3>Join us for an exciting evening of Rummy</h3>
          
          <div className="details-container">
            <div className="details">
              <div className="detail-item">
                <div className="icon">🗓️</div>
                <p><span>When:</span> Saturday, 10:00 PM</p>
              </div>
              <div className="detail-item">
                <div className="icon">📍</div>
                <p><span>Where:</span> Anand's house</p>
              </div>
              <div className="detail-item">
                <div className="icon">🎮</div>
                <p><span>What to bring:</span> Just your winning spirit!</p>
              </div>
            </div>
          </div>

          <div className="message">
            <div className="quote-marks">❝</div>
            <p>Let's make this weekend memorable with family, fun, and friendly competition!</p>
            <div className="quote-marks">❞</div>
          </div>

          <div className="features">
            <div className="feature">
              <span className="feature-icon">🍕</span>
              <p>Snacks & Drinks</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🎵</span>
              <p>Good Music</p>
            </div>
          </div>

          <div className="golden-line"></div>

          <div className="rules-section">
            <h3>Game Rules & Guidelines</h3>
            <div className="rules-grid">
              <div className="rule-item">
                <span className="rule-icon">🎮</span>
                <h4>Basic Rules</h4>
                <p>Arrange 13 cards into sequences and sets. Pure sequence is mandatory to win.</p>
              </div>
              <div className="rule-item">
                <span className="rule-icon">🃏</span>
                <h4>Valid Sets</h4>
                <p>3-4 cards of same rank, different suits. Jokers can be used as substitutes.</p>
              </div>
              <div className="rule-item">
                <span className="rule-icon">⏰</span>
                <h4>Timing</h4>
                <p>All players must arrive by 9:00 PM. Game continues until players are exhausted.</p>
              </div>
              <div className="rule-item">
                <span className="rule-icon">👥</span>
                <h4>Viewers Welcome</h4>
                <p>Viewers are welcome! They can contribute by preparing snacks, tea/coffee to keep players energized.</p>
              </div>
              <div className="rule-item">
                <span className="rule-icon">🦟</span>
                <h4>Comfort Measures</h4>
                <p>Odomas will be provided free of cost to all players and viewers for mosquito protection.</p>
              </div>
              <div className="rule-item">
                <span className="rule-icon">🎵</span>
                <h4>Entertainment</h4>
                <p>Infotainment system available with controlled volume to maintain gaming atmosphere.</p>
              </div>
              <div className="rule-item">
                <span className="rule-icon">🤫</span>
                <h4>Viewer Etiquette</h4>
                <p>Viewers should maintain silence and not interrupt or influence the game.</p>
              </div>
              <div className="rule-item">
                <span className="rule-icon">🚗</span>
                <h4>Transportation</h4>
                <p>Players and viewers need to arrange their own transportation.</p>
              </div>
            </div>
          </div>

          <div className="golden-line"></div>
          
          <div className="rsvp">
            <div className="rsvp-content">
              <p>RSVP to confirm your spot at the table! 🃏</p>
              <div className="contact">
                <p>Call or Text: +91 7993868897</p>
              </div>
            </div>
          </div>

          <div className="footer">
            <p>Get ready for an unforgettable evening of cards and fun! 🎉</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
